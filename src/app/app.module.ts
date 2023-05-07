import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { PgpComponent } from './pgp/pgp.component';

@NgModule({
  declarations: [
    AppComponent,
    PgpComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
