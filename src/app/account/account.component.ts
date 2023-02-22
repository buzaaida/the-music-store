import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService : UserService, private router : Router) { }
  accounts: any;

  ngOnInit(): void {
    this.http.get("https://localhost:7015/api/User/getUserById{id}")
    .subscribe({
      next: (result: any) => this.accounts = result,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }
  onClickGoToUserEdit() {
    this.router.navigate(['/user-detail']);
  }

}
