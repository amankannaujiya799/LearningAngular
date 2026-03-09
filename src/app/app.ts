import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Event } from './event/event';
import { Counter } from './counter/counter';
import { Conditional } from './conditional/conditional';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Login,Event,Counter,Conditional],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day1');
}
