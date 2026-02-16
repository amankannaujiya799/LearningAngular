import { Component, computed, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //  Basic signal
   data = signal<string | number>("aman")

  //  handleData(){
  //   this.data.set(20)
  //  }

  // computed signal

  speed:Signal<number> = computed<number>(() => 80)


}
