import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRed: boolean = true;

  setToRed() {
    this.isRed = true;
  }

  setToBlue() {
    this.isRed = false;
  }
}
