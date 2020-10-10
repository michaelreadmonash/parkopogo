import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  login() {
    this.router.navigateByUrl('login')
  }

  home() {
    this.router.navigateByUrl('home')
  }

  account() {
    this.router.navigateByUrl('account')
  }

  messages() {
    this.router.navigateByUrl('messages')
  }

  premium() {
    this.router.navigateByUrl('premium')
  }

  notImplemented() {
    alert("This feature hasn't been implemented...");
  }
}
