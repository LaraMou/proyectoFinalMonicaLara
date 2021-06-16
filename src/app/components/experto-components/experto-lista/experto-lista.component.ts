import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-experto-lista',
  templateUrl: './experto-lista.component.html',
  styleUrls: ['./experto-lista.component.scss']
})
export class ExpertoListaComponent implements OnInit {

  expertos: Expertos[];
  paginador: any;
  expertoSeleccionado: Expertos;

  constructor(
    private expertoService: ExpertoService,
    private modalService: ModalService,
    // private authService: AuthService,
    private activatedRoute: ActivatedRoute)
   { }

  ngOnInit() {
    this.expertoService.getExpertos().subscribe(
      expertos => this.expertos = expertos
    );
  }

  

}
