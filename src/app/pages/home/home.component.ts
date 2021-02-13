import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService, private router: Router) { }

  subscription: Subscription
  // user$: Observable<User>;

  user: any
  userRate: any

  async ngOnInit() {
    try {
      this.user = await this.userService.getUser()
      this.subscription = this.bitcoinService.getRate(this.user.coins).subscribe(rate => {
        this.userRate = rate
      })
      // this.userRate = this.bitcoinService.getRate(this.user.coins)
    } catch {
      this.router.navigateByUrl('signup')
    }
  }


  ngOnDestroy() {
    if (this.user) {
      this.subscription.unsubscribe()

    }
  }

}
