import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-adiciona-endereco',
  templateUrl: 'adiciona-endereco.html',
})
export class AdicionaEnderecoPage {
  formCEP: FormGroup;
  endereco: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl:AlertController,
    public util: UtilProvider
  ) {
    this.formCEP = new FormGroup({
      'cep': new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}[0-9]{3}')])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaEnderecoPage');
  }

  submitCEP(){
    this.util.buscarPeloCEP(this.formCEP.value.cep)
      .subscribe(endereco => {
        this.endereco = endereco.json();
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
      })
    console.log(this.formCEP);
  }
  naoSabeCEP(){
    // Import the AlertController from ionic package 
    // Consume it in the constructor as 'alertCtrl' 
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

}