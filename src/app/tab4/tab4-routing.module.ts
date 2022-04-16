import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'make-note',
    loadChildren: () => import('src/app/make-note/make-note.module').then(m => m.MakeNotePageModule)
  },
  {
    path: 'edit-note',
    loadChildren: () => import('src/app/edit-note/edit-note.module').then(m => m.EditNotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
