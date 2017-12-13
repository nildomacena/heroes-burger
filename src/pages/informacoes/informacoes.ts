import { FireProvider } from './../../providers/fire/fire';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: FireProvider) {
    this.user = this.fire.user;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesPage');
  }

}
