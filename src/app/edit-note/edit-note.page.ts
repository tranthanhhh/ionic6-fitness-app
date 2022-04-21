import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NoteService } from './../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: NoteService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      title: [''],
      note: [''],
    })
    console.log(this.updateBookingForm.value)
  }
  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/tabs/tab4']);
      })
      .catch(error => console.log(error));
  }
}
