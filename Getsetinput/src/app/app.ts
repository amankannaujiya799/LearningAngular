import { Component, signal, WritableSignal , } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name:WritableSignal<string> = signal("")

  resetName(){
    this.name.set("Hello Aman how are you?")
  }

  setvalue(value:string){
    this.name.set(value)
  }


 
}
