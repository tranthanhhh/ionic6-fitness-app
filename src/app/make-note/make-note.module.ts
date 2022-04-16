import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MakeNotePageRoutingModule } from './make-note-routing.module';

import { MakeNotePage } from './make-note.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MakeNotePageRoutingModule
  ],
  declarations: [MakeNotePage]
})
export class MakeNotePageModule {}
