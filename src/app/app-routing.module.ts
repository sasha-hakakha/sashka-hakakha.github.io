import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PgpComponent } from './pgp/pgp.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'pgp', component: PgpComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
