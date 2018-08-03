import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';

import { Item } from '../../../models/item';
import { Items } from '../../../providers';

@Component({
  selector: 'home-list',
  templateUrl: 'item-list.html'
})
export class ItemListPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }
  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    // this.navCtrl.push(ItemDetailPage, {
    //   item: item
    // });
    console.log(item);
    this.navCtrl.push('detail-page', {
      id: item.id
    });
  }
}
