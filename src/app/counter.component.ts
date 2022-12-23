import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'counter',
  styles: [
    `
    .counter {
      position: relative;
    }
    input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `,
  ],
  template: `
    <div class="counter">
      <button (click)="decrement()">
        Decrement
      </button>
      <input type="text" [(ngModel)]="count">
      <button (click)="increment()">
        Increment
      </button> 
    </div> 
  `,
})
export class CounterComponent {
  @Input()
  count: number = 0;

  @Output()
  mychange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.mychange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.mychange.emit(this.count);
  }
}
