import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() moves: Array<Move>

  constructor() { }


  ngOnInit(): void {
    console.log(this.moves);

  }

}
