import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // data type [string , number , boolean ]

  courseName: string | number = "Angular 20";
  currentDate : Date = new Date();
  rollNo = 222;
  

  constructor() {
    // yha variable ko acess karne ke liye this keyword ka use karte hai
    console.log(this.courseName)
    console.log(this.currentDate)

    // ager us variable ka value change karna  hai to ham this ka use krege
this.courseName = 1
    this.courseName = "hello aman you are learnig angular"
    console.log(this.courseName)
  }

  showAlert(){
    alert("Hello aman welcome to our company")
  }



}
