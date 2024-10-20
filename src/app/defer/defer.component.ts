import { Component } from '@angular/core';
import { DeferTestComponent } from './defer-test/defer-test.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [DeferTestComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
