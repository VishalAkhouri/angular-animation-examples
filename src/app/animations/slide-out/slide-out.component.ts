import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.scss'],
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
export class SlideOutComponent implements OnInit {
  state = 'normal';
  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
