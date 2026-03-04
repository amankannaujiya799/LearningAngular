import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Controlflow } from './components/controlflow/controlflow';
import { Attribute } from './components/attribute/attribute';
import { NotFound } from './components/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Admin ,DataBinding,Signal , Controlflow ,Attribute , RouterLink , RouterLinkActive,NotFound,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularHindi');
}
