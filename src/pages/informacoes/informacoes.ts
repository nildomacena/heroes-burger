import { FireProvider } from './../../providers/fire/fire';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {
  user: any;
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams, 
    public fire: FireProvider,
    public modalCtrl: ModalController
  ) {
    this.user = this.fire.user;
    console.log(this.user);
    if(!this.user)
      this.navCtrl.setRoot('HomePage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesPage');
  }

  addEndereco(){
    let modal = this.modalCtrl.create('AdicionaEnderecoPage');
    modal.present();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  } 
}
