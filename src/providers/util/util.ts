import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class UtilProvider {
  public cep: string = '';
  constructor(public alertCtrl: AlertController, public call: CallNumber, public http:Http) {
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

  buscarPeloCEP(cep: string): Observable<any>{
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/ `);
  }
}
