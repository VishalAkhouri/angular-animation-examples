import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import {AnimationsModule} from "../animations/animations.module";

@NgModule({
  imports: [
    CommonModule,
    AnimationsModule
  ],
  declarations: [ExamplesComponent],
  exports: [ExamplesComponent]
})
export class ExamplesModule { }
