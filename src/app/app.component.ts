import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild(CounterComponent) head : CounterComponent | undefined;

  handle(event: string) {
    console.log(event);
  }
  title = 'my-Gular';
}
