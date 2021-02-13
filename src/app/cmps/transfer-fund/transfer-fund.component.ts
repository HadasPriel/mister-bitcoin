import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Output() moveEv = new EventEmitter
  @Input() contact
  @Input() maxCoins
  amount: number = null

  constructor() { }

  ngOnInit(): void {
  }
  onMove() {
    if (!this.amount || this.amount <= 0) return
    this.moveEv.emit(this.amount)
    this.amount = null
  }
}
