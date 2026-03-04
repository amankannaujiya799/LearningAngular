import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  studentList = [
    { name: 'AAA', city: 'Pune', status: true },
      { name: 'BB', city: 'Azamgarh', status:false },
        { name: 'CC', city: 'Mau', status: false },
          { name: 'DD', city: 'Nagpur', status: true }
  ]




}

