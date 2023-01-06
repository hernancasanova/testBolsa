import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private service: ServicesService) { }
  symbols:Array<any>=[];//
  data:Array<any>=[];
  symbol: string = '';
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
    this.symbol=e.target.value;
    this.service.getSymbol(this.symbol).subscribe(r => {
      this.data = r[0].historical;
      console.log("data: ",this.data)
    }
    );
  }
}
