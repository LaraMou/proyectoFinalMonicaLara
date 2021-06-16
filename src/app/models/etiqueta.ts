import { Ietiquetas } from "../interfaces/ietiquetas.interface";
import { Expertos } from "./expertos";

export class Etiqueta implements Ietiquetas {
  experto: Array<Expertos> = [];;
  total: number;
  id: number;
  nombre: string;
  lastModifiedBy:string;
  createdDate: any;

  constructor(nombre: string, createdDate: any) {
    this.nombre = nombre;
    this.createdDate = createdDate;
  }

}
