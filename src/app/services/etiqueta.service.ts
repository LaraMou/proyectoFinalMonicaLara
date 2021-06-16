import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiqueta } from '../models/etiqueta';
import { Observable,throwError } from 'rxjs';
import { map ,catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
//endpoint atributos
  private urlEndpoint: string = 'https://app-expertos.herokuapp.com/api/etiquetas';
  // private urlEndpoint: string = 'http://localhost:8080/api/expertos';
  constructor(private http:HttpClient,private router: Router) { }

  getEtiquetas(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.urlEndpoint);
  }
  borrarEtiqueta(idTag:any): Observable<Etiqueta> {
    return this.http.delete<Etiqueta>(this.urlEndpoint+'/delete/'+idTag);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndpoint}/${id}`);
  }

  create(etiqueta: Etiqueta): Observable<Etiqueta> {
    console.log("llego aqui")
    return this.http.post(this.urlEndpoint, etiqueta)
      .pipe(
        map((response: any) => response.etiqueta as Etiqueta),
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
    getEtiqueta(id): Observable<Etiqueta> {
    return this.http.get<Etiqueta>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/etiquetas']);
          console.error(e.error.mensaje);
        }

        return throwError(e);
      }));
  }
  filtarEtiquetas(term: string): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(`${this.urlEndpoint}/filtrar-productos/${term}`);
  }
    update(etiqueta: Etiqueta): Observable<any> {
    return this.http.put<any>(`${this.urlEndpoint}/${etiqueta.id}`, etiqueta).pipe(
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
