import { FireProvider } from './../../providers/fire/fire';
import { UtilProvider } from './../../providers/util/util';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions, Icon, AlertController, ToastController, LoadingController, Item, App } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

@IonicPage()
@Component({
  selector: 'page-modal-item-detail',
  templateUrl: 'modal-item-detail.html',
})
export class ModalItemDetailPage {
  item: any; 
  modal: false;
  rate: any = 0;
  estrelas: any[];
  avaliou: boolean = false;
  user: any;
  authState: any;
  comentarios:  any[];
  qtdeCarrinho = this.fire.carrinho.quantidadeItens;

  constructor(
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public zone: NgZone,
    public fire: FireProvider,
    public util: UtilProvider,
    public events: Events
    ) {
    this.events.subscribe('carrinho:atualizado',() => {
      this.qtdeCarrinho = this.fire.carrinho.quantidadeItens;
      console.log('qtde carrinho: ', this.qtdeCarrinho);
    })

    this.item = this.navParams.get('item');
    if (!this.item)
      this.navCtrl.setRoot('HomePage')
    this.modal = this.navParams.get('modal');
    //this.user = this.fire.user;
    console.log(this.item)
    this.authState = fire.authState.subscribe(user => {
      this.user = user;
      console.log(this.user)
    });

    this.comentarios = [
      {usuario: 'Mickey', texto: 'Ótimo sanduíche. Bem saboroso! Vou pedir novamente da próxima vez!', avatar: 'assets/img/avatar2.png'},
      {usuario: 'Minnie', texto: 'Muito gostoso! Vou pedir de novo!', avatar: 'assets/img/avatar3.jpeg'},
      {usuario: 'Donald', texto: 'Bem legal! Gostei!', avatar: 'assets/img/avatar4.png'},
    ]

  }

  ionViewDidLoad() {
    this.adicionarAoCarrinho()
    console.log('ionViewDidLoad ModalItemDetailPage');
    this.zone.run(() => {
      this.estrelas = [false,false,false,false,false]
    })
  }

  abrirComentario(ionItem: Item, comentario: any){
    console.log(ionItem);
    ionItem.setElementClass('comentario-selecionado', true);
    /*let modal = this.modalCtrl.create('ComentarioPage',comentario,{cssClass: 'modal-comentario'});
    modal.present();*/
  }

  adicionarAoCarrinho(){
    console.log(this.item);
    let alert = this.alertCtrl.create({
      title: `Adicionando ${this.item.titulo} ao carrinho`,
      message: 'Alguma observação?',
      inputs:[{
        name: 'observacao',
        type: 'text',
        placeholder: 'Ex.: Sem presunto com mais queijo'
      }],
      buttons: [
        {
        text: 'Cancel', role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        }, {
          text: 'Ok',
          handler: () => {
          console.log('Ok clicked');
        }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss(data => {
      this.item
      this.fire.adicionarAocarrinho(this.item, data.observacao)
      console.log(data);
    })
  }

  irParaCarrinho(){
    this.navCtrl.push('CarrinhoPage');
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
