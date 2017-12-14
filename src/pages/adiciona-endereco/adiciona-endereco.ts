import { Http } from '@angular/http';
import { UtilProvider, BAIRROS } from './../../providers/util/util';
import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, TextInput } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-adiciona-endereco',
  templateUrl: 'adiciona-endereco.html',
})
export class AdicionaEnderecoPage {
  
  formCEP: FormGroup;
  endereco: any;
  achouEndereco:boolean = false;
  bairros: string[] = BAIRROS;
  bairroSelecionado: any;
  numero: string = '';
  descricao: string = '';
  sabeCEP: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl:AlertController,
    public util: UtilProvider,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public http: Http
  ) {
    this.endereco = {
      logradouro: '',
      bairro: '',

    }
    this.formCEP = new FormGroup({
      'cep': new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}[0-9]{3}')])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaEnderecoPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submitCEP(){

    
    this.util.buscarPeloCEP(this.formCEP.value.cep)
      .subscribe(endereco => {

        this.endereco = endereco.json();

        this.bairros.map(bairro => {
          if(bairro == this.endereco.bairro)
            this.bairroSelecionado = bairro;
        })
        console.log(endereco);

        if(endereco.json().erro){
          let alert = this.alertCtrl.create({
            title: 'adiciona-endereco',
            message: 'Message',
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
        }
        else{
          this.achouEndereco = true;
        }
        console.log(this.endereco);
      })
  }
  naoSabeCEP(){
    this.sabeCEP = false;
    
    /*
    let alert = this.alertCtrl.create({
      title: 'adiciona-endereco',
      message: 'Message',
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
    */
  }

  selectBairro(bairro){
    this.bairroSelecionado = bairro;
    console.log(this.bairroSelecionado)
  }
  reinserirCEP(){
    this.achouEndereco = false;
    this.sabeCEP = true;
  }
  
  salvaEndereco(){
    this.util.toast('Endereço salvo');
    this.dismiss();
    console.log(this.bairroSelecionado, this.endereco.logradouro, this.numero);
  }
}
