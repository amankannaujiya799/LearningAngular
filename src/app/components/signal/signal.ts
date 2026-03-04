import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  courseName : string = "Aman we are learnig Signal concept";


  angularVersion = signal("20") 

  courseDurestion = signal<string>("3 month")


  changeDuration(){
    this.courseName = "react";

    this.courseDurestion.set("6 month");
    

  }


} 
