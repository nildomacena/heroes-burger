import { Platform , Events} from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase/app';


@Injectable()
export class FireProvider {
  public user: any;
  public authState = this.afAuth.authState;
  public carrinho: any;

  constructor(private afAuth: AngularFireAuth, public platform: Platform, public fb: Facebook, public events: Events) {
    this.carrinho = {
      valor_total: 0,
      quantidadeItens: 0,
      itens: []
    }
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.user = null;        
        return;
      }
      this.user = user;
      console.log('User: ', this.user)
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }


  adicionarAocarrinho(item: any, observacao: string){
    let achou: boolean = false;
    if(this.carrinho.itens.length == 0){
      this.carrinho.itens.push({menuItem: item, quantidade: 1, valor_item: item.preco});
      this.carrinho.quantidadeItens += 1;
      this.atualizaValorTotal()
      achou = true;
      return;
    }
    
    else{
      this.carrinho.itens.map((itemCarrinho, index) => {
        if(itemCarrinho.menuItem.titulo == item.titulo){
          itemCarrinho.quantidade++;
          itemCarrinho.valor_item += item.preco;
          achou = true;
          this.atualizaValorTotal();
          console.log(this.carrinho, 'achou!!')
          return;
        }
      })
    }
    console.log(achou);
    if(!achou){
      this.carrinho.itens.push({menuItem: item, quantidade: 1, valor_item: item.preco});
      this.carrinho.quantidadeItens += 1;
      this.atualizaValorTotal();
    }
    
  }
  
  atualizaValorTotal(){
    this.carrinho.valor_total = 0;
    this.carrinho.quantidadeItens = 0;
    this.carrinho.itens.map(carrinhoItem => {
      this.carrinho.valor_total += carrinhoItem.valor_item;
      this.carrinho.quantidadeItens += carrinhoItem.quantidade;
    })
    this.events.publish('carrinho:atualizado');
  }

  getCarrinho(){
    return this.carrinho;
  }
  signOut() {
    this.afAuth.auth.signOut();
  }

}
