import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import {ItemListPage} from "./item-list/item-list";

@NgModule({
  declarations: [
    HomePage,
    ItemListPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }
