import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizedNumericInputComponent } from './randomized-numeric-input.component';
import { MatGridListModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { isNumber } from 'util';

describe('RandomizedNumericInputComponent', () => {
  let component: RandomizedNumericInputComponent;
  let fixture: ComponentFixture<RandomizedNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomizedNumericInputComponent],
      imports: [MatGridListModule, AngularFontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizedNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isNumber returns null to an empty array correctly', () => {
    const notANumber = null;
    const aNumber = 5;
    expect(component.isNumber(notANumber)).toBe('');
    expect(component.isNumber(aNumber)).toBe('5');
  });

  it('digit method pushes correct value to the emitted string', () => {
    const aNumberString = '9';
    component.currentNumber = '123';
    component.digit(aNumberString);
    expect(component.currentNumber).toBe('1239');
  });
  

});
