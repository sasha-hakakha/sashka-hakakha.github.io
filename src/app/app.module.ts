import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { PgpComponent } from './pgp/pgp.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'pgp', component: PgpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PgpComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
