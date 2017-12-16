import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate('1000ms ease-in')),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state = 'normal';

  animate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
