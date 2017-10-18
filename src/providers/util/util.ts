import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Injectable()
export class UtilProvider {

  constructor(public alertCtrl: AlertController, public call: CallNumber) {
    console.log('Hello UtilProvider Provider');
  }


  ligar(){
    let alert = this.alertCtrl.create({
      title: 'Deseja nos ligar?',
      buttons: [
        {
        text: 'Cancelar', role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        }, {
          text: 'Ligar',
          handler: () => {
            this.call.callNumber('999093265',false);
          }
        }
      ]
    });
    alert.present();
  }
}
