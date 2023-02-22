import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/data/user-data';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  userEditForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.userService.updateUser(this.userService.formData.userId).subscribe(
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
