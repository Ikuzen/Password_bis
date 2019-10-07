import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericalPassWordInputComponent } from './numerical-pass-word-input/numerical-pass-word-input.component';
import { PasswordViewerComponent } from './numerical-pass-word-input/password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './numerical-pass-word-input/randomized-numeric-input/randomized-numeric-input.component';
import {MatGridListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPassWordInputComponent,
    PasswordViewerComponent,
    RandomizedNumericInputComponent,
    
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    MatGridListModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
