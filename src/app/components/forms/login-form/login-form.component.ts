import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
 
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
  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response) => {

        if (response.token) {
          localStorage.setItem('Token', response.token)
          this.authService.setLoggedIn(true)
          this.router.navigate(['/experts'])
        } else {
          this.authService.setLoggedIn(false)
          localStorage.removeItem('Token')

        }
        },
        err =>{

          this.authService.setLoggedIn(false)
          localStorage.removeItem('Token')

        }
    )
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

}
