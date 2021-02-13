import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact
  }

  onEdit() {
    this.contactService.saveContact(this.contact)
    this.router.navigate(['contact'])
  }

  onRemove() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['contact'])
  }
}
