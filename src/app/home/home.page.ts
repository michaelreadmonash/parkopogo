import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colourHeart: string = "light";

  constructor(private router:Router) {}

  routePage() {
    this.router.navigateByUrl('/login');
  }

  changeHeartColour() {
    return this.colourHeart = "danger"
  }

}
