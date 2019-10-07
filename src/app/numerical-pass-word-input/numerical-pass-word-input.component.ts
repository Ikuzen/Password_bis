import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numerical-pass-word-input',
  templateUrl: './numerical-pass-word-input.component.html',
  styleUrls: ['./numerical-pass-word-input.component.css']
})
export class NumericalPassWordInputComponent implements OnInit {
  @Input() userPassword: string;
  @Output() onPasswordMatch: void;

  attemptsLeft: number;
  pwdFlavor:string;
  isBlocked:boolean;
  constructor() { }

  ngOnInit() {
    this.attemptsLeft = 3;
    this.pwdFlavor = "enter your password (9 digits)"
    this.isBlocked = false;
  }

  checkPwdLen() {
    if (this.userPassword.length === 9) {
      this.onFullPwd();
    }
  }
  onFullPwd() {
    if (this.userPassword === "123456789") {
      this.onPasswordMatch;
    }
    else {
      if(this.attemptsLeft >0){
        this.pwdFlavor = `Wrong password, ${this.attemptsLeft} tries left`;
        this.attemptsLeft--
      }
      else{
        this.pwdFlavor ="Account blocked !"
        this.isBlocked = true;
        this.resetInput();

      }
    }
  }

  resetInput() {
    this.userPassword = ''
  }

  emitValue(value: string) {
    this.userPassword = value;
    this.checkPwdLen();
    if (value.length > 9) {
      this.resetInput();
    }

  }

}
