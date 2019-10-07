import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalPassWordInputComponent } from './numerical-pass-word-input.component';
import { MatGridListModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RandomizedNumericInputComponent } from './randomized-numeric-input/randomized-numeric-input.component';
import { PasswordViewerComponent } from './password-viewer/password-viewer.component';

describe('NumericalPassWordInputComponent', () => {
  let component: NumericalPassWordInputComponent;
  let fixture: ComponentFixture<NumericalPassWordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericalPassWordInputComponent,RandomizedNumericInputComponent,PasswordViewerComponent],
      imports: [MatGridListModule,AngularFontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalPassWordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
