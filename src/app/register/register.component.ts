import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../data/user-data';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  //registerForm: FormGroup = this.createUserForm();
  constructor(private formBuilder: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  // createUserForm(){
  //   return this.formBuilder.group({
  //     email: [""],
  //     password: [""],
  //     username: [""],
  //     firstName: [""],
  //     LastName: [""],
  //     address: [""],
  //   })
  // }

  // createUser() {
  //   const userValue = this.registerForm.value;
  //   this.userService.createUser(userValue).subscribe({
  //     next: () => {window.alert('Registration successful!');
  //     this.router.navigateByUrl("/");
  //   },
  //     error: (error) => {console.log(error)}
  //   })
  // }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.userService.createUser().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.userService.formData = new UserData();
  }

}
