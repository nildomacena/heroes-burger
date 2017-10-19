import { FireProvider } from './../../providers/fire/fire';
import { UtilProvider } from './../../providers/util/util';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions, Icon, AlertController, ToastController, LoadingController } from 'ionic-angular';

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
  user: any;
  authState: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public zone: NgZone,
    public fire: FireProvider,
    public util: UtilProvider
    ) {
    this.sanduiche = this.navParams.get('sanduiche');
    //this.user = this.fire.user;
    console.log(this.sanduiche)
    this.authState = fire.authState.subscribe(user => {
      this.user = user;
    })

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
    this.util.ligar();
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

  enviarAvaliacao(){
    console.log('enviar avaliação');
    let toast = this.toastCtrl.create({
      message: 'Avaliação salva!',
      duration: 2500,
      showCloseButton: true,
      closeButtonText: 'X'
    });
    toast.present();
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

  comentar(ma_avaliacao?:boolean){

    let alert = this.alertCtrl.create({
      title: 'Deixe seu comentário',
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Digite aqui seu comentário'
        }
      ],
      buttons: [
        {
        text: 'Cancelar', role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        }, {
          text: 'Enviar',
          handler: () => {
          console.log('Ok clicked');
        }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss(data => {
      console.log(data.comentario)
    })
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: "Carregando..."
    })
    loading.present();
    this.fire.signInWithFacebook()
      .then(result => {
        loading.dismiss();
        console.log('resultado: ', result)
      })
      .catch(err => {
        console.log(err);
        loading.dismiss();
      })
  }
}
