import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProfileComponent, User } from './program-render/profile/profile.component';
import { BuiltInComponent } from "./pipe/built-in/built-in.component";
import { DeferComponent } from "./defer/defer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProfileComponent, BuiltInComponent, DeferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild(CounterComponent) head : CounterComponent | undefined;

  handle(event: string) {
    console.log(event);
  }
  title = 'my-Gular';
  initialCount = 18;
  user : User = {
    name : "Admin",
    isAdmin : true
  }
}
