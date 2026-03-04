import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html', // aap ise hta ke yha bhi html ka code likh sakte h0  mai yha interpolution use kr rha hu curly braket ka use kar ke
  styleUrl: './app.css'
})
export class App {

  name = "Aman"
  age = 23
  Qualification = "Master of Computer Application"
 
}
