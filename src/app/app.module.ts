import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateFunctionsComponent } from './create-functions/create-functions.component';
import { StringReversalComponent } from './string-reversal/string-reversal.component';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CreateFunctionsComponent,
    StringReversalComponent,
    UserListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
