import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mister-bitcoin';
  height: number


  ngOnInit(): void {
    this.height = document.body.clientHeight

  }
}
