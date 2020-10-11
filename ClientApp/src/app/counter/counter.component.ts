import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount: number = 0;
  public name: string = "bob";

  public incrementCounter() {
    this.currentCount++;
  }
}
