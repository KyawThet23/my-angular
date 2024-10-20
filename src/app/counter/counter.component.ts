import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) name: string | undefined;
  @Output()
  myEvent = new EventEmitter<string>();

  emitEvent() {
    this.myEvent.emit('Hello World!');
  }

  text: string = 'Find me by view child';

  @Input({required:true}) count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
}
