import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, App } from 'ionic-angular';

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
    public util: UtilProvider,
    public app: App
  ) {
    console.log(this.platfom.is('cordova'));
    this.sanduiches = [
      {titulo: "Flash", preco: 9, descricao: "Hambúrguer, queijo, presunto, ovo e alface", imagem: "flash.jpg", thumbnail: 'assets/img/sanduiches/flash-thumbnail.png'},
      {titulo: "Deadpool", preco: 9.5, descricao: "Hambúrguer, bacon, queijo, presunto e salada", imagem: "deadpool.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Supegirl", preco: 9.5, descricao: "Cheddar, frango, queijo, presunto, bacon e salada", imagem: "supergirl.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Capitão América", preco: 8, descricao: "Queijo, presunto, ovo e salada", imagem: "capitao-america.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Viúva Negra", preco: 12.5, descricao: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "viuva-negra.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Mulher Maravilha", preco: 12.5, descricao: "Filé de alcatra, Presunto, queijo, bacon, ovo e salada", imagem: "mulher-maravilha.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Super Homem", preco: 12.5, descricao: "Filé de alcatra, filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "superman.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Hulk", preco: 15, descricao: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "hulk.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Homem Formiga", preco: 8.5, descricao: "Hambúrguer, queijo e salada", imagem: "homem-formiga.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Lanterna Verde", preco: 10, descricao: "Frango desfiado, queijo coalho, milho verde, cenoura e presunto", imagem: "lanterna-verde.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'},
      {titulo: "Homem Aranha", preco: 10, descricao: "Calabresa, queijo, presunto, ovo e salada", imagem: "avatar.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.png'}
    ]
    this.sanduiches.map(sanduiche => {
      if(this.platfom.is('cordova'))
        sanduiche['linkImagem'] = 'assets/img/sanduiches/'+sanduiche.imagem;
      else
        sanduiche['linkImagem'] = 'assets/img/sanduiches/'+sanduiche.imagem;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  goToSanduiche(sanduiche){
    console.log(sanduiche)
    this.app.getRootNav().push('ModalItemDetailPage', {item: sanduiche, modal: false})
    /* let modal = this.modalCtrl.create('ModalItemDetailPage',{sanduiche: sanduiche});
    modal.present(); */
  }
    
}
