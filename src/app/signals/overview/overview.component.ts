import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

}
