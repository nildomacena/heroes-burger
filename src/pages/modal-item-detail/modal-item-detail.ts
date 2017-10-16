import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-item-detail',
  templateUrl: 'modal-item-detail.html',
})
export class ModalItemDetailPage {
  sanduiche: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.sanduiche = this.navParams.get('sanduiche');
    console.log(this.sanduiche)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalItemDetailPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
