import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  // Form Group to contain User Data to Login
  loginForm: FormGroup = new FormGroup({});
  // AuthSubscription
  authSubscription: Subscription = new Subscription();
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     // Before the Login Component Renders, we create our LoginForm
    // with the Form Builder
    this.loginForm = this.formBuilder.group({
      // Here we define the FormControls with the default value
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: ''
    });
  }
  /**
   * login()
   * Method that calls the AuthService to Login
   * Users into our app
   */
   login(): void {

    // We verify the LoginForm is Valid and we can access to username and password
    if(this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password){
      let user: User = new User(this.loginForm.value.email,this.loginForm.value.password)

      // We verify that the user is correctly created
      // console.table(user);

      // We call the Auth Service to login the user
      this.authSubscription = this.authService.login(user)
        .subscribe((response) => {
          if(response.token){
            console.log(`Token: ${response.token}`);
            // Set Token in Session Storage of our Navigator
            sessionStorage.setItem('Token', response.token);
            // We set loggedIn in our Service in order to be able to navigate to Home
            this.authService.setLoggedIn(true);

            // Navigation to "/Home"
            // In this moment, the AuthGuard will be executed, as we are trying to acces to
            // HomePage that has the canActivate assigned to it
            this.router.navigate(['/expertos']);
          }else{
            alert('Error: No Token Received');
            this.authService.setLoggedIn(false);
            sessionStorage.removeItem('Token');
          }
        });
    } else {
      this.authService.setLoggedIn(false);
      alert('You must provide email and a valid password')
    }
  }

  // We ensure our subscription disappears with the LoginComponent
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
