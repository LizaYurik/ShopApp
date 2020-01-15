import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordValidation } from '../confirm-password';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  singUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(){
    this.singUpForm =  this.formBuilder.group({
      name : ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      lastName : ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]]
    },{ 
      validators: PasswordValidation.MatchPassword
    })
  }

  get form(){return this.singUpForm.controls;}

  signup(){
    this.router.navigate(['/home']);
  }

}
