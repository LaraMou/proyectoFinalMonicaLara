import { Iuser } from "../interfaces/iuser";

export class User implements Iuser {

  email: string;
  password: string;

  constructor( email: string, password: string) {
    this.email = email
    this.password = password
  }
}
