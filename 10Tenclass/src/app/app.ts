import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   data  = 20

//    updateData(){
//     this.data = "aman"
//    }  such type error is happeb


// we use for this multiple data type define 
// data:number | string | boolean = 20

//    updateDate(){
//     this.data = "aman"
//    }

//    editData(){
//     this.data = true
//    }

// if such type dqata are happen then we use any

data:any = 20

    updateData(){
      this.data = "aman"
    }

    editData(){
      this.data = true
    }
     updateData1(){
      this.data = [1,2,3,4]
    }

}
