import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of,throwError } from 'rxjs';
import { Expertos } from '../models/expertos';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExpertoService {
//endpoint atributos
  // private urlEndpoint: string = 'http://localhost:8080/api/expertos';
  private urlEndpoint: string = 'https://app-expertos.herokuapp.com/api/expertos';
  constructor(private http:HttpClient) { }

  getExpertos(): Observable<Expertos[]> {
    return this.http.get<Expertos[]>(this.urlEndpoint);
    //otra manera
    // return this.http.get(this.urlEndpoint).pipe(
    //   map((response => response as Expertos[]))
    // );

  }
  create(experto: Expertos): Observable<Expertos> {
    return this.http.post(this.urlEndpoint, experto)
      .pipe(
        map((response: any) => response.experto as Expertos),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }


}
