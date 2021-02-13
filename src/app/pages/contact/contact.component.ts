import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactServise: ContactService) { }

  subscription: Subscription
  contacts: Contact[]

  ngOnInit(): void {
    this.contactServise.loadContacts()
    this.subscription = this.contactServise.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onFilter(filterBy) {
    this.contactServise.loadContacts(filterBy)
  }

}
