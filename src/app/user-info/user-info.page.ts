import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserInfoDBService } from './../shared/userinfodb.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  userForm: FormGroup;
  constructor(private router: Router, 
    private aptService: UserInfoDBService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: [''],
      genre: [''],
      weight: [''],
      height: [''],
      DOB:[''],
    })
  }
  formSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.aptService.createUser(this.userForm.value).then(res => {
        console.log(res)
        this.userForm.reset();
        this.router.navigate(['/tabs/tab1']);
      })
        .catch(error => console.log(error));
    }
  }
}
