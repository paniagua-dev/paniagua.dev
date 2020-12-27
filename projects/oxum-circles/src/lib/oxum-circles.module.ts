import { NgModule } from '@angular/core';
import { OxumCirclesComponent } from './oxum-circles.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [OxumCirclesComponent],
  imports: [
    CommonModule
  ],
  exports: [OxumCirclesComponent]
})
export class OxumCirclesModule { }
