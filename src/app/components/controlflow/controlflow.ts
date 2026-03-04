import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css',
})
export class Controlflow {

  selectedCaste:string = '';

}
