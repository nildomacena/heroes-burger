import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions, Icon } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-item-detail',
  templateUrl: 'modal-item-detail.html',
})
export class ModalItemDetailPage {
  sanduiche: any; 
  rate: any = 0;
  estrelas: any[];
  avaliou: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public zone: NgZone) {
    this.sanduiche = this.navParams.get('sanduiche');
    console.log(this.sanduiche)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalItemDetailPage');
    this.zone.run(() => {
      this.estrelas = [false,false,false,false,false]
    })
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  ligar(){
    console.log('ligar')
  }
  selecionaEstrela(index){
    this.avaliou = true;
    this.estrelas.map((estrelaArray, indexArray) => {
      if(indexArray <= index)
        this.estrelas[indexArray] = true
      else
        this.estrelas[indexArray] = false;
    })
  }

  avaliar(){
    console.log('avaliar');
    let modalOptions: ModalOptions;
    modalOptions = {
      cssClass: 'modal-avaliar'
    }
    let modal = this.modalCtrl.create('AvaliarPage',{},modalOptions);
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
    })
  }
  onModelChange(event){
    console.log(event);
  }
}
