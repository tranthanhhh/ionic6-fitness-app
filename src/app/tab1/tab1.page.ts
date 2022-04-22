import { Component } from '@angular/core';
import { UserInfoDB } from '../shared/userInfo';
import { UserInfoDBService } from './../shared/userinfodb.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   UserInfos = [];
  constructor(
    private aptService: UserInfoDBService
  ) { }
  ngOnInit() {
    this.fetchUsers();
    let userRes = this.aptService.getUserInfo();
    userRes.snapshotChanges().subscribe(res => {
      this.UserInfos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.UserInfos.push(a as UserInfoDB);
      })
    })
  }
  fetchUsers() {
    this.aptService.getUserInfo().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteUser(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteUser(id)
    }
  }

}
