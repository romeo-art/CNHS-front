import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private appService: AppServiceService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.appService.login(this.loginForm.value).subscribe(
      (response) => {
        localStorage.setItem("token", response.token)
        this.router.navigateByUrl('/teachers');
        console.log(response);
      },
      (error) => {
        this.router.navigateByUrl('/sign-up');
        console.log(error);
      }
    );
  }
}
