import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Etiqueta } from 'src/app/models/etiqueta';
import swal from 'sweetalert2';
import { EtiquetaService } from 'src/app/services/etiqueta.service';

@Component({
  selector: 'app-crear-etiqueta',
  templateUrl: './crear-etiqueta.component.html',
  styleUrls: ['./crear-etiqueta.component.scss']
})
export class CrearEtiquetaComponent implements OnInit {
  public etiqueta: Etiqueta = new Etiqueta("",new Date());
  titulo: string = "Crear Etiqueta";
  errores: string[];
  constructor(private etiquetaService: EtiquetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.etiquetaService.getEtiqueta(id).subscribe((etiqueta) => this.etiqueta = etiqueta);
      }
    });
  }
  create(): void {
    console.log(this.etiqueta);
    this.etiquetaService.create(this.etiqueta)
      .subscribe(
        etiqueta => {
          this.router.navigate(['/etiquetas']);
          swal.fire ('Nueva Etiqueta', `La etiqueta ${etiqueta.nombre} ha sido creada con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }
    update(): void {
    console.log(this.etiqueta);
    this.etiqueta.experto = null;
    this.etiquetaService.update(this.etiqueta)
      .subscribe(
        json => {
          this.router.navigate(['/etiquetas']);
          swal.fire('Etiqueta Actualizada', `${json.mensaje}: ${json.etiqueta.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }
}





