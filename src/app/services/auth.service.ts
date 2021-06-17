import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


// We import HTTP Client to perform HTTP Requests
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isLoggedIn: boolean = false


  constructor(private http: HttpClient) { }

  /**
   * Login for our Contact App
   * @param user User that's login in
   * @return Observable<boolean>
   */
  // login(user: User): Observable<boolean> {

  //   /**
  //    *  We controll credentials of our user
  //    *  we return an Observable of type boolean
  //    *  with the use of the method 'of'
  //   */
  //   if (user.email === 'admin@email.com' && user.password === 'admin') {
  //     return of(true);
  //   } else {
  //     return of(false);
  //   }
  // }

  /**
   * Login with real HTTP Request
   * @param user User
   * @reurn Observable<any>
   */
   login(email:string, password:string): Observable<any> {
    let body = {
      email: email,
     password: password
    }
    return this.http.post('https://app-expertos.herokuapp.com/api/auth/login', body)
  }

  // Setter and Getter of LoggedIn
  get loggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
  register(userName:string, email:string,password:string): Observable<any>{
    let body = {
      username: userName,
      email: email,
     password: password
    }

    return this.http.post('https://app-expertos.herokuapp.com/signup', body)
  }
}
