import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger('slideState', [
      state('add', style({
        height: 50,
        opacity: 1
      })),
      transition('void => *', [
        style({
          height: 0,
          opacity: 0
        }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({
          height: 0,
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SlideComponent implements OnInit {
  state = 'normal';
  showPanel: boolean;
  constructor() { }

  ngOnInit() {
    this.showPanel = false;
  }

  animate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  handleShowPanel() {
    this.showPanel = !this.showPanel;
  }
}
