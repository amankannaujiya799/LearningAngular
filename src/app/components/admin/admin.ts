import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})

// if you want use ngoninit  then write such type 
export class Admin  implements OnInit , AfterViewInit ,OnDestroy{

  constructor(){
    console.log("constructor exicuted")
    // propert inintilization
  }

  ngOnInit(): void {
    // api call
    // subscription
    console.log("onInit")
  }

  ngAfterViewInit(): void {
    
    console.log("hello i am exicuting now")
  }

  ngOnDestroy(): void {
    console.log('ngOndestroy')
  }
}
