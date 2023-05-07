import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgpComponent } from './pgp/pgp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'pgp', component: PgpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
