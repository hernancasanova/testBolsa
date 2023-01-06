import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NemosComponent } from './nemos.component';



@NgModule({
  declarations: [NemosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NemosComponent]
})
export class NemosModule { }
