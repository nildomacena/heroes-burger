import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UtilProvider {

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello UtilProvider Provider');
  }


  ligar(){

  }
}
