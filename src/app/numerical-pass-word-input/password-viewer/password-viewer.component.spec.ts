import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordViewerComponent } from './password-viewer.component';
import { MatGridListModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('PasswordViewerComponent', () => {
  let component: PasswordViewerComponent;
  let fixture: ComponentFixture<PasswordViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordViewerComponent],
      imports: [MatGridListModule, AngularFontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('togglePassword switches input and FA type correctly', () => {
    component.inputType = 'password';
    component.faType = 'eye-slash';
    component.togglePassword();
    expect(component.inputType).toBe('text');
    expect(component.faType).toBe('eye');
  });
});
