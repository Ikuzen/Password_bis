import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.css']
})
export class RandomizedNumericInputComponent implements OnInit {
  @Input()currentNumber: string;
  @Input()isBlocked:boolean;
  @Output() onCurrentChangeNumber = new EventEmitter<string>();

  randomArr:number[];
  constructor() { }


  ngOnInit() {  
    this.randomArr = [0,1,2,3,4,5,6,7,8,9,null,null];
    this.randomArr = this.shuffle(this.randomArr);
    if(this.currentNumber === undefined){
      this.currentNumber = ""
    }

  }
  

  digit(number: string){
    if(!this.isBlocked){
      this.currentNumber += ""+number;
      this.onCurrentChangeNumber.emit(this.currentNumber);
    }
  }


  shuffle(array:number[]):number[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  isNumber(number:number){
    if(number!= null){
      return number;
      
    }
    else{
      return "";
    }
  }
}