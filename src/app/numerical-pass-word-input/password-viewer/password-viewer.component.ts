import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.css']
})
export class PasswordViewerComponent implements OnInit {
  @Input() currentNumber: string;
  @Input() pwdFlavor:string;
  inputType:string;
  faType:string;
  mouseUp =  () =>{
    this.inputType = "password"
    this.faType = "eye-slash"
    removeEventListener('mouseup', this.mouseUp)
  }
    
  constructor() { }

  ngOnInit() {
    this.inputType = "password"
    this.faType = "eye-slash"
  }

  togglePassword(){
    this.inputType = "text"
    this.faType = "eye"
    addEventListener('mouseup', this.mouseUp)
  }
  
}
