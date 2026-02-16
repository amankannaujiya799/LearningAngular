import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   
   speed = signal(100)

   constructor(){
    effect(() => {
      console.log("Speed is ", this.speed())
    })


   }

    increaseSpeed(){
      this.speed.set(this.speed() + 10)
    }
}
