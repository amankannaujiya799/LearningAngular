import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

counter = 0;
// class ki variable acess krne ke liye this keyword

handleAdd(){
  this.counter++;
  
}

handleMinus(){
  if(this.counter>0)
  this.counter--;
}

handleReset(){
  this.counter=0;
}



}
