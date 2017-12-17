import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
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
export class SlideComponent implements OnInit {
  state = 'normal';
  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
