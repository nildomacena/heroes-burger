import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireProvider } from '../../providers/fire/fire';


@IonicPage()
@Component({
  selector: 'page-fechar-pedido',
  templateUrl: 'fechar-pedido.html',
})
export class FecharPedidoPage {
  carrinho: any;
  selecionado: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fire: FireProvider,
    public util: UtilProvider
  ) {

    this.carrinho = this.fire.getCarrinho();
  }

  ionViewDidLoad() {
    
  }

  selecionaEndereco(endereco){
    this.selecionado = endereco;
  }

  fechaPedido(){
    this.navCtrl.setRoot('HomePage');
    this.util.toast('Pedido enviado.')
  }
}
