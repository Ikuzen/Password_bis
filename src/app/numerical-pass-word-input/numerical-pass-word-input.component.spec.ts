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
      declarations: [NumericalPassWordInputComponent, RandomizedNumericInputComponent, PasswordViewerComponent],
      imports: [MatGridListModule, AngularFontAwesomeModule]
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

  it('should should affect userInput into empty array when calling resetInput()', () => {
    component.userPassword = '32421';
    component.resetInput();
    expect(component.userPassword).toBe('');
    expect(component.userPassword).not.toBe(undefined);

  });

  it('should call onfullPassword when calling checkPasswordLength with userPassword length equals 9', () => {
    spyOn(component, 'onFullPassword');
    component.userPassword = '101010101';
    component.checkPasswordLength();
    expect(component.onFullPassword).toHaveBeenCalled();

  });
  it('should execute blockAccount method when attempsLeft equals 0', () => {
    spyOn(component, 'blockAccount');
    component.attemptsLeft = 0;
    component.onFullPassword();
    expect(component.blockAccount).toHaveBeenCalled();
  });

  it('should trigger onfullPassword method when calling emitValue with a string of a length >= 9', () => {
    spyOn(component, 'onFullPassword');
    component.emitValue('000000000');
    expect(component.onFullPassword).toHaveBeenCalled();
  });

  it('should not trigger onfullPassword method when calling emitValue with a string of a length <=9', () => {
    spyOn(component, 'onFullPassword');
    component.emitValue('00000000');
    expect(component.onFullPassword).not.toHaveBeenCalled();
  });

  it('should trigger correctPassword method when password is correct', () => {
    spyOn(component, 'correctPassword');
    component.emitValue('123456789');
    expect(component.correctPassword).toHaveBeenCalled();
  });

  it('should trigger wrongPassword method when password is incorrect', () => {
    spyOn(component, 'wrongPassword');
    component.emitValue('123456780');
    expect(component.wrongPassword).toHaveBeenCalled();
  });

});
