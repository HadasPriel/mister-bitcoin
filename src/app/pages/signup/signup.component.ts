import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  name: string = ''
  bitcoin: number = null

  ngOnInit(): void {
  }

  onSignup() {
    this.userService.signup(this.name, this.bitcoin)
    this.router.navigateByUrl('')
  }

}
