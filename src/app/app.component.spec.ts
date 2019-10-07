import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NumericalPassWordInputComponent } from './numerical-pass-word-input/numerical-pass-word-input.component';
import { PasswordViewerComponent } from './numerical-pass-word-input/password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './numerical-pass-word-input/randomized-numeric-input/randomized-numeric-input.component';
import { MatGridListModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NumericalPassWordInputComponent,
        PasswordViewerComponent,
        RandomizedNumericInputComponent,

      ],
      imports: [
        MatGridListModule,
        AngularFontAwesomeModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'password'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('password');
  });

});
