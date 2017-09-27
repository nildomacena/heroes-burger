import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page1: any = 'Tab1Page';
  page2: any = 'Tab2Page';
  page3: any = 'Tab3Page';
  constructor(public navCtrl: NavController) {

  }

}
