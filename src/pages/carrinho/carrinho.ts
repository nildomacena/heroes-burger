import { FireProvider } from './../../providers/fire/fire';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  carrinho: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: FireProvider) {
    this.carrinho = this.fire.getCarrinho();
    console.log(this.carrinho);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
