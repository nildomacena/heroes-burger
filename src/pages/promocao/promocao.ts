import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name:'promocao',
  segment: 'promocao'
})
@Component({
  selector: 'page-promocao',
  templateUrl: 'promocao.html',
})
export class PromocaoPage {
  item = {titulo: "Deadpool", preco: 9.5, descricao: "Hambúrguer, bacon, queijo, presunto e salada", imagem: "deadpool.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.jpg'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocaoPage');
  }

}
