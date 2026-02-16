import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   data = 10;
   //define4 Signal
   count = signal(100)
    updateData(){
      this.data++
    }
    updateData1(){
      this.count.set(this.count() + 1)
}
}
