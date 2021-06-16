import { Expertos } from "../models/expertos";

export interface Ietiquetas {
  id: number;
  nombre: string;
  lastModifiedBy: string;
  createdDate: any;
  experto: Array<Expertos>;
  total: number;
}
