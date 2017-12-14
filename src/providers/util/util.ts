import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class UtilProvider {
  public cep: string = '';
  constructor(
    public alertCtrl: AlertController, 
    public call: CallNumber, 
    public http:Http,
    public toastCtrl:ToastController
  ) {
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

  toast(mensagem){
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      closeButtonText: 'X',
      showCloseButton: true
    });
    toast.present();
  }
}


export const BAIRROS = [
  'Benedito Bentes',
  'Jacintinho',
  'Cidade Universitária',
  'Tabuleiro dos Martins',
  'Clima Bom',
  'Jatiúca',
  'Vergel do Lago',
  'Feitosa',
  'Santa Lúcia',
  'Trapiche da Barra',
  'Ponta Verde',
  'Petrópolis',
  'Serraria',
  'Ponta Grossa',
  'Poço',
  'Santos Dumont',
  'Pinheiro',
  'Prado',
  'Antares',
  'Farol',
  'Chã da Jaqueira',
  'Barro Duro',
  'Gruta de Lourdes',
  'Bom Parto',
  'Cruz das Almas',
  'Levada',
  'Santa Amélia',
  'Chã de Bebedouro',
  'Bebedouro',
  'São Jorge',
  'Ponta da Terra',
  'Ipioca',
  'Rio Novo',
  'Ouro Preto',
  'Fernão Velho',
  'Jacarecica',
  'Riacho Doce',
  'Jardim Petrópolis',
  'Canaã',
  'Pitanguinha',
  'Mangabeiras',
  'Pajuçara',
  'Jaraguá',
  'Centro',
  'Pescaria',
  'Mutange',
  'Guaxuma',
  'Pontal da Barra',
  'Santo Amaro',
  'Garça Torta'
]