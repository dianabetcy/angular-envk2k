import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateFunctionsComponent } from './create-functions/create-functions.component';
import { StringReversalComponent } from './string-reversal/string-reversal.component';

import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'createFunction', component: CreateFunctionsComponent },
  { path: 'stringReversal', component: StringReversalComponent },
  { path: 'userList', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
