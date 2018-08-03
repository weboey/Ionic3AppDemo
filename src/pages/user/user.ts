import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': '用户主页',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': '我的',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#aee649'
      },
      {
        'title': '设置',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#54e666'
      },
      {
        'title': '文章',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#e685ca'
      },
      {
        'title': '关注',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#30e69d'
      },
      {
        'title': '粉丝',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#4185e6'
      },
      {
        'title': '好友',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#644ae6'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  openNavDetailsPage(item) {
    console.log(item);
    // this.navCtrl.push(NavigationDetailsPage, { item: item });
  }
}
