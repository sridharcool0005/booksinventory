import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { BookItemComponent } from './book-item/book-item.component';

const routes: Routes = [
  { path: '', component: ListBooksComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'book/:id', component: BookItemComponent },
  { path: '**', component: PagenofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
