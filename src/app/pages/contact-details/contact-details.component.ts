import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact
  moves: Array<Move> = []
  amount: number = null
  maxCoins: number = null

  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
    private userService: UserService) { }

  async ngOnInit() {
    this.contact = this.route.snapshot.data.contact
    this.getUserInfo()
    console.log('this.moves', this.moves);
  }

  async getUserInfo() {
    const user = await this.userService.getUser()
    console.log(user);
    this.maxCoins = user.coins
    user.moves.forEach(move => {
      if (move.contact._id === this.contact._id) {
        this.moves.push(move)
      }
    })
  }

  onRemove() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['contact'])
  }

  onMove(amount) {
    this.userService.addMove(this.contact, amount)
    this.getUserInfo()
  }

}
