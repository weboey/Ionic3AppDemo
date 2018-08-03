import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import {FirstRunPage, MainPage, HomeRoot} from '../pages';
import { Settings } from '../providers';

@Component({
  template: `
  <ion-nav  [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = MainPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
              settings: Settings,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
