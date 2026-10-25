import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  //host: { class: 'block h-dvh font-sans antialiased' },
})
export class App {
  protected readonly title = signal('go-task');
}
