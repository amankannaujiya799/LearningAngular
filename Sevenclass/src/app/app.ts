import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  callMe(){
    alert("hello Aman")
  }
  //Count = 0
  //counter(){
    //this.Count++
    //console.log(this.Count);

    count = 0;
    counter(action:string){
      if(action === 'add'){
        this.count++
      } else if(action === 'subtract'){
        this.count--
      }
  }
}
