import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Event } from '../event/event';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,Event] ,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Data:", this.loginForm.value);
      alert("Login Successful");
    } else {
      alert("Form Invalid");
    }
  }

}