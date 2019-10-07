import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numerical-pass-word-input',
  templateUrl: './numerical-pass-word-input.component.html',
  styleUrls: ['./numerical-pass-word-input.component.css']
})
export class NumericalPassWordInputComponent implements OnInit {
  @Input() userPassword: string;
  @Output() passwordMatch: void;

  attemptsLeft: number;
  passwordFlavor: string;
  isBlocked: boolean;
  constructor() { }

  ngOnInit() {
    this.attemptsLeft = 3;
    this.passwordFlavor = 'enter your password (9 digits)';
    this.isBlocked = false;
  }

  checkPasswordLength() {
    if (this.userPassword.length === 9) {
      this.onFullPassword();
    }
  }

  onFullPassword() {
    if (this.userPassword === '123456789') {
      this.passwordMatch = console.log('match !');
    } else {
      this.wrongPassword();

    }
  }

  wrongPassword() {
    if (this.attemptsLeft > 0) {
      this.passwordFlavor = `Wrong password, ${this.attemptsLeft} tries left`;
      this.attemptsLeft--;
    } else {
      this.blockAccount();
    }
  }

  blockAccount() {
    this.passwordFlavor = 'Account blocked !';
    this.isBlocked = true;
    this.resetInput();
  }

  resetInput() {
    this.userPassword = '';
  }

  emitValue(value: string) {
    this.userPassword = value;
    this.checkPasswordLength();
    if (value.length > 9) {
      this.resetInput();
    }

  }

}
