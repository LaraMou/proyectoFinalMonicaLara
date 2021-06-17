import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


// We import HTTP Client to perform HTTP Requests
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Boolean Variable to tell the AuthGuard that the user is Logged In
  private isLoggedIn: boolean = false

  // We inject Http Client to the constructor of the service
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
  login(user: User): Observable<any> {
    let body = {
      email: user.email,
      password: user.password,
    };
    return this.http.post('http://localhost:8080/api/auth/login', body)
  }

  // Setter and Getter of LoggedIn
  get loggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
  isAuthenticated() {
    console.log("estoy aqui")
    return localStorage.getItem("logged");
  }
}
