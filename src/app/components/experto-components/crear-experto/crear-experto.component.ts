import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


import { Etiqueta } from 'src/app/models/etiqueta';
import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { EtiquetaService } from 'src/app/services/etiqueta.service';

@Component({
  selector: 'app-crear-experto',
  templateUrl: './crear-experto.component.html',
  styleUrls: ['./crear-experto.component.scss']
})
export class CrearExpertoComponent implements OnInit {

  public experto: Expertos = new Expertos();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  etiquetas: Etiqueta[] = [];


  errores: string[];
  constructor(
    private expertoService: ExpertoService,
    private etiquetaService: EtiquetaService,
    private router: Router

  ) { }

  ngOnInit() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    let etiqueta = new Etiqueta(value,new Date());

    // Add our etiqueta
    if ((value || '').trim()) {

      this.etiquetas.push(etiqueta);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(etiqueta: Etiqueta): void {
    const index = this.etiquetas.indexOf(etiqueta);

    if (index >= 0) {
      this.etiquetas.splice(index, 1);
    }
  }


  create(): void {
    console.log(this.experto);
    this.experto.etiquetas = this.etiquetas;
    this.expertoService.create(this.experto)
      .subscribe(
        experto => {
          this.router.navigate(['/experto']);
          swal.fire( `El experto ${experto.nombre} ha sido creado con éxito`,'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
