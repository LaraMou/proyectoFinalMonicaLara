import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')])],
      phones: this.formBuilder.array([]), // Array of phones: [ {prefix:..., number: ...}, {prefix: ..., number: ...}]
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: [18, Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])]
    });
  }

  // Getter to obtain the Phone Array from the RegisterForm
  // A Form Array wil be an Array of Phone Groups
  get phoneArray(): FormArray{
    return this.registerForm.get('phones') as FormArray
  }

  // Our user will be able to add more than one phone
  addPhone() {

    // We create a Phone Group with Prefix(for example: +34) and Number(for example: 916667788)
    const phone = this.formBuilder.group(
      {
        prefix: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])],
        number: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])]
      }
    );

    // We push the new phone to the Array of phones in the Register Form
    this.phoneArray.push(phone);

  }

  // Our user will be able to remove a phone from the phoneArray
  removePhone(index: number) {
    this.phoneArray.removeAt(index);
  }

  // Submit
  submitRegisterForm() {
    console.table(this.registerForm.value);
    this.router.navigate(['/login']);
  }
}
