import { Injectable } from '@angular/core';
import { Note } from '../shared/Note';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createBooking(apt: Note) {
    return this.bookingListRef.push({
      title: apt.title,
      note: apt.note,
    });
  }
  getBooking(id: string) {
    this.bookingRef = this.db.object('/note/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/note');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, apt: Note) {
    return this.bookingRef.update({
      title: apt.title,
      note: apt.note,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/note/' + id);
    this.bookingRef.remove();
  }
}
