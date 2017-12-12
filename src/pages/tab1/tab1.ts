import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  combos: any[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public platform: Platform,
    public app: App
  ) {
    this.combos = [
      {titulo: 'Hero Kids', imagem: 'hero-kids.png', preco: 44, descricao: 'Refrigerante 1 litro + 1 Batata + 3 Hambúrgueres (Super-homem ou Supergirl)'},
      {titulo: 'Mega Hero', imagem: 'mega-hero.png', preco: 50, descricao: 'Refrigerante 2 litros + 2 Batatas + 3 Hambúrgueres (Super-homem, Mulher Maravilha ou Supergirl)'},
      {titulo: 'Family Hero', imagem: 'family-hero.png', preco: 31.5, descricao: 'Refrigerante 1 litro + 1 Batata + 2 Hambúrgueres (Super-homem, Mulher Maravilha ou Supergirl)'},
      {titulo: 'Family Hero', imagem: 'hulk.png', preco: 21, descricao: 'Sanduíche Hulk + 1 Batata + 1 refrigerante lata'},
      {titulo: 'Family Hero', imagem: 'formiga.png', preco: 21, descricao: 'Sanduíche Homem-Formiga + 1 Batata + 1 refrigerante lata'}
    ];
    this.combos.map(combo => {
      if(this.platform.is('cordova'))
        combo['linkImagem'] = 'assets/img/combos/'+combo.imagem;
      else
        combo['linkImagem'] = 'assets/img/combos/'+combo.imagem;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  goToCombo(combo){
    this.app.getRootNav().push('ModalItemDetailPage', {item: combo, modal: false})
  }

}
