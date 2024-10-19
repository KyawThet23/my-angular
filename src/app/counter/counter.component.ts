import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) name: string | undefined ;
  @Output() 
  myEvent = new EventEmitter<string>();

  emitEvent() {
    this.myEvent.emit("Hello World!");
  }
}
