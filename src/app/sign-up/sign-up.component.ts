import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppServiceService } from './../service/app-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    fullname : new FormControl('', [Validators.required]),
    age : new FormControl('', [Validators.required]),
    address : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    cpassword : new FormControl('', [Validators.required]),
  })

  get fullname () {
    return this.signUpForm.get('fullname');
  }
  get age () {
    return this.signUpForm.get('age');
  }
  get address () {
    return this.signUpForm.get('address');
  }
  get phone () {
    return this.signUpForm.get('phone');
  }
  get email () {
    return this.signUpForm.get('email');
  }
  get password () {
    return this.signUpForm.get('password');
  }
  get cpassword () {
    return this.signUpForm.get('cpassword');
  }

  onSubmit() {
    this.appService.register(this.signUpForm.value)
      .subscribe(response => {console.log(response)}, error => {console.log(error)})

    console.log(this.signUpForm.value);

  }
}
