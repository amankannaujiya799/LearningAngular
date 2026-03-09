import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

count = 0;

increment() {
  this.count++;
}

handleClick(){
  console.log("Hello")
  this.helloWorld();
}

helloWorld(){
  console.log("Aman")
}


// function parameter
sum(a:number , b:number){
  console.log(a+b)
}

// there are many event likh click input mouse focus blurevent
// input event 

onTyping(event:unknown){
  console.log("Typed", event);

}

onHover(){
  console.log("Hover Event");
}

leave(){
  console.log("Mouse Leaved");
}


}
