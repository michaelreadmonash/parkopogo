import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  constructor() { }

  imageSelector: Number = 0;

  clicked(image) {
    this.imageSelector = image
    return this.imageSelector;
  }

}
