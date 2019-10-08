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

  it('isNumber transforms null into an empty array correctly', () => {
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

  it('randomArr contains exactly 1,2,3,4,5,6,7,8,9,0 and two null after the shuffle method call', () => {
    const aRandomArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, null, null];
    const digitComparator = {
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      null: true,
    };
    let testResult = true;
    let nullCase = true;
    component.shuffle(aRandomArr);

    for (const num of aRandomArr) {
      if (digitComparator[num]) {
        digitComparator[num] = false;
      } else {
        if (nullCase) {
          nullCase = false;
        } else {
          testResult = false;
        }
      }
    }
    expect(testResult).toBeTruthy();
  });

});
