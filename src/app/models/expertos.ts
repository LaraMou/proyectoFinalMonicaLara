import { Iexpertos } from "../interfaces/iexpertos.interface";
import { Etiqueta } from "./etiqueta";


export class Expertos implements Iexpertos{
  id: number;
  nombre: string;
  nif: string;
  motivo: string;
  estado: string;
  disponibilidad: string;
  modalidad: string;
  autonomo: boolean;
  telefono: string;
  email: string;
  ciudad: string;
  direccion: string;
  linkedin: string;
  porcentaje: number;
  precio: number;
  puntuacion: number;
  cv: string;
  origen:string
 etiquetas: Array<Etiqueta>=[];




}

