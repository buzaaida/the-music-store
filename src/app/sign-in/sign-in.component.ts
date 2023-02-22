import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../interfaces/login-model';
import { AuthResponse } from '../interfaces/auth-response';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //@ViewChild('f') 
  signInForm!: NgForm;

  invalidLogin: boolean;
  credentials: LoginModel = { email: '', password: '' };
  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.signInForm.reset();

  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }

  login = (form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthResponse>("https://localhost:7015/api/Auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
        .subscribe({
          next: (response: AuthResponse) => {
            const token = response.token;
            localStorage.setItem("jwt", token);
            this.invalidLogin = false;
            this.router.navigate(["/"]);
          },
          error: (err: HttpErrorResponse) => this.invalidLogin = true
        })
    }
  }

  isUserAuthenticated() {
    const token: any = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  logOut = () => {
    localStorage.removeItem("jwt");
  }

}








