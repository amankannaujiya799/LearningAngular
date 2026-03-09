import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  imports: [],
  templateUrl: './conditional.html',
  styleUrl: './conditional.css',
})
export class Conditional {
// if ke liye
  isLogin = true;

// else if ke liye
  status:string = "processing";


 
}
