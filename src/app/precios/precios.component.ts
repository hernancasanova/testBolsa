import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: Array<any> = [];
  //@Input() symbol: string = '';
  //data: Array<number> = [];

}
