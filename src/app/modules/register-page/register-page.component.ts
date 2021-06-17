import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})


  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]

    });
  }


  // Submit
  submitRegisterForm() {

    console.table(this.registerForm.value);
    console.log("hola");
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value.username,this.registerForm.value.email, this.registerForm.value.password)
      .subscribe((response)=>{
        this.snackbarService.openSnackBar(response.message);
      this.router.navigate(['/login']);


      })
    } else{
      this.snackbarService.openSnackBar("Los datos son incorrectos");
     }

  }
}
