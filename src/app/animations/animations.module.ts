import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideComponent} from "./slide/slide.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlideOutComponent} from "./slide-out/slide-out.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [SlideComponent, SlideOutComponent],
  exports: [SlideComponent, SlideOutComponent]
})
export class AnimationsModule { }
