import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  combos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.combos = [
      {nome: 'Hero Kids', imagem: 'assets/img/combos/hero-kids.png', preco: 44, descricao: 'Refrigerante 1 litro + 1 Batata + 3 Hambúrgueres (Super-homem ou Supergirl)'},
      {nome: 'Mega Hero', imagem: 'assets/img/combos/mega-hero.png', preco: 50, descricao: 'Refrigerante 2 litros + 2 Batatas + 3 Hambúrgueres (Super-homem, Mulher Maravilha ou Supergirl)'},
      {nome: 'Family Hero', imagem: 'assets/img/combos/family-hero.png', preco: 31.5, descricao: 'Refrigerante 1 litro + 1 Batata + 2 Hambúrgueres (Super-homem, Mulher Maravilha ou Supergirl)'},
      {nome: 'Family Hero', imagem: 'assets/img/combos/hulk.png', preco: 21, descricao: 'Sanduíche Hulk + 1 Batata + 1 refrigerante lata'},
      {nome: 'Family Hero', imagem: 'assets/img/combos/formiga.png', preco: 21, descricao: 'Sanduíche Homem-Formiga + 1 Batata + 1 refrigerante lata'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
