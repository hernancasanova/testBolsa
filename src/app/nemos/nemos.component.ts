import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-nemos',
  templateUrl: './nemos.component.html',
  styleUrls: ['./nemos.component.css']
})
export class NemosComponent implements OnInit {

  constructor(private service: ServicesService) { }
  symbols:any={};
  ngOnInit(): void {
    this.service.getSymbols().subscribe(r => {
      //return r.results;
      //console.log("r: ",r);
      this.symbols = r.symbolsList;
      //console.log("this.symbols: ",this.symbols)
    }
    );
  }

  changeNemo(e:any):void{
    console.log("e.target.value", e.target.value)
    //alert("voy bien")
  }

}
