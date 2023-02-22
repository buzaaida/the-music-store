import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get("https://localhost:7015/api/User")
    .subscribe({
      next: (result: any) => this.users = result,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

}
