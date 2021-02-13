import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  constructor() { }
  @Input() myData
  ColumnChart = 'ColumnChart'
  chartColumns = ['date', 'value']
  myTitle = 'The total USD value of trading volume on major bitcoin exchanges'
  myWidth = 300
  myHeight = 100

}
