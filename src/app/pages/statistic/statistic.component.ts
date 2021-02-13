import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  myData

  async ngOnInit() {
    this.myData = await this.bitcoinService.getMarketPrice()
  }

}
