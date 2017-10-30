import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html',
})
export class ComentarioPage {
  comentario: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comentario = this.navParams.data;
    console.log(this.comentario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentarioPage');
  }

}
