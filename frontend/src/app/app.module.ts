import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBooksComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
