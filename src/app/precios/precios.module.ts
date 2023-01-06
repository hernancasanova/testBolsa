import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosComponent } from './precios.component';



@NgModule({
  declarations: [PreciosComponent],
  imports: [
    CommonModule
  ],
  exports: [PreciosComponent]
})
export class PreciosModule { }
