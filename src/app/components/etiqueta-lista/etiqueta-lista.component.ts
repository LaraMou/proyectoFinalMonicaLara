import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/app/models/etiqueta';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etiqueta-lista',
  templateUrl: './etiqueta-lista.component.html',
  styleUrls: ['./etiqueta-lista.component.scss']
})
export class EtiquetaListaComponent implements OnInit {
  etiquetas: Etiqueta[];

  constructor(private etiquetaService: EtiquetaService) { }

  ngOnInit() {
    this.etiquetaService.getEtiquetas().subscribe(
      etiquetas=> this.etiquetas=etiquetas
    )
  }

  delete(etiqueta: Etiqueta): void {
    Swal.fire({
      title: 'Está seguro?'

    }).then((result) => {
      if (result.value) {

        this.etiquetaService.delete(etiqueta.id).subscribe(
          response => {
            this.etiquetas = this.etiquetas.filter(tag => tag !== etiqueta)
            Swal.fire(
              'Etiqueta Eliminada!',
              `Etiqueta ${etiqueta.nombre} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
