import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Output() filterEv = new EventEmitter
  constructor() { }

  filterBy = { name: '', phone: '' }

  ngOnInit(): void {

  }

  onSetFilter() {
    this.filterEv.emit(this.filterBy)
  }

}
