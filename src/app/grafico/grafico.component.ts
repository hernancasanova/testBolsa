import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeekViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("changes: ",changes)
    if(changes.data!==undefined){
      let a:any=changes.data.currentValue;
      for (let i in a) {
          //console.log("a[i]: ",a[i])
          let date: any = new Date(a[i].date).toLocaleDateString(); 
          this.dataGrafico.push(a[i].close);
          this.categories.push(date);
      }
      //console.log("existen datos: ",)
    }
    if(changes.nemo !== undefined){
        this.nemo=changes.nemo.currentValue;
        console.log("this.nemo: ",this.nemo)
    }
    //this.nemo=changes.nemo.currentValue;
  }

  @Input() data:Array<any>=[];
  @Input() nemo:string='';
  dataGrafico: number[]=[];
  categories: any[] = [];

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Precios'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: this.nemo,
        type: 'line',
        data: this.dataGrafico,
      }
    ],
    yAxis: {
      title: {
          text: this.nemo
      }
    },
    xAxis: {
      //type: "datetime",
      //categories: ["H","E","R"],
      categories:this.categories
  }
  });
}
