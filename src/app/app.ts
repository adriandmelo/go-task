import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  host: { class: 'block h-dvh font-sans antialiased' },
})
export class App {
  protected readonly title = signal('go-task');
}
