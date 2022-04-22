import { Injectable } from '@angular/core';
import { UserInfoDB } from '../shared/userInfo';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class UserInfoDBService {
  userInfoRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;
  // bookingListRef: AngularFireList<any>;
  // bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createUser(apt: UserInfoDB) {
    return this.userInfoRef.push({
      username: apt.username,
      genre: apt.genre,
      weight: apt.weight,
      height: apt.height,
      DOB:apt.DOB,
    });
  }
  // Get Single
  getUser(id: string) {
    this.userRef = this.db.object('/userInfo/' + id);
    return this.userRef;
  }
  // Get List
  getUserInfo() {
    this.userInfoRef = this.db.list('/userInfo');
    return this.userInfoRef;
  }
  // Update
  updateUser(id, apt: UserInfoDB) {
    return this.userRef.update({
      username: apt.username,
      genre: apt.genre,
      weight: apt.weight,
      height: apt.height,
      DOB:apt.DOB,
    });
  }
  // Delete
  deleteUser(id: string) {
    this.userRef = this.db.object('/appointment/' + id);
    this.userRef.remove();
  }
}