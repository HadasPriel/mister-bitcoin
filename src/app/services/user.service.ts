import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  USER: User = null

  public getUser() {
    const user = localStorage.getItem('user-misterbit')
    if (!user) return Promise.reject('no user')
    const userToSend = JSON.parse(user)
    this.USER = userToSend
    return Promise.resolve(userToSend)
  }

  public signup(name, coins): void {
    const user = new User()
    user.name = name
    user.coins = coins
    user.moves = []
    this.USER = user
    localStorage.setItem('user-misterbit', JSON.stringify(user))
  }

  public addMove(contact, amount): void {
    this.USER.coins = this.USER.coins - amount
    this.USER.moves.unshift({ time: Date.now(), contact, amount })
    localStorage.setItem('user-misterbit', JSON.stringify(this.USER))
  }

}

