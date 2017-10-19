import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  sanduiches: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public platfom: Platform,
    public util: UtilProvider
  ) {
    console.log(this.platfom.is('cordova'));
    this.sanduiches = [
      {titulo: "Flash", preco: 9, ingredientes: "Hambúrguer, queijo, presunto, ovo e alface", imagem: "flash.jpg"},
      {titulo: "Deadpool", preco: 9.5, ingredientes: "Hambúrguer, bacon, queijo, presunto e salada", imagem: "deadpool.jpg"},
      {titulo: "Supegirl", preco: 9.5, ingredientes: "Cheddar, frango, queijo, presunto, bacon e salada", imagem: "supergirl.jpg"},
      {titulo: "Capitão América", preco: 8, ingredientes: "Queijo, presunto, ovo e salada", imagem: "capitao-america.jpg"},
      {titulo: "Viúva Negra", preco: 12.5, ingredientes: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "viuva-negra.jpg"},
      {titulo: "Mulher Maravilha", preco: 12.5, ingredientes: "Filé de alcatra, Presunto, queijo, bacon, ovo e salada", imagem: "mulher-maravilha.jpg"},
      {titulo: "Super Homem", preco: 12.5, ingredientes: "Filé de alcatra, filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "superman.jpg"},
      {titulo: "Hulk", preco: 15, ingredientes: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "hulk.jpg"},
      {titulo: "Homem Formiga", preco: 8.5, ingredientes: "Hambúrguer, queijo e salada", imagem: "homem-formiga.jpg"},
      {titulo: "Lanterna Verde", preco: 10, ingredientes: "Frango desfiado, queijo coalho, milho verde, cenoura e presunto", imagem: "lanterna-verde.jpg"},
      {titulo: "Homem Aranha", preco: 10, ingredientes: "Calabresa, queijo, presunto, ovo e salada", imagem: "avatar.jpg"}
    ]
    this.sanduiches.map(sanduiche => {
      if(this.platfom.is('cordova'))
        sanduiche['linkImagem'] = 'assets/img/sanduiches/'+sanduiche.imagem;
      else
        sanduiche['linkImagem'] = '../../assets/img/sanduiches/'+sanduiche.imagem;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  goToSanduiche(sanduiche){
    console.log(sanduiche)
    let modal = this.modalCtrl.create('ModalItemDetailPage',{sanduiche: sanduiche});
    modal.present();
  }
    
}
