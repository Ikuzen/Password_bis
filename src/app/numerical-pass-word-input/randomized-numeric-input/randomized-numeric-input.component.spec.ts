import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizedNumericInputComponent } from './randomized-numeric-input.component';
import { MatGridListModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('RandomizedNumericInputComponent', () => {
  let component: RandomizedNumericInputComponent;
  let fixture: ComponentFixture<RandomizedNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizedNumericInputComponent ],
      imports:[MatGridListModule,AngularFontAwesomeModule]
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
});
