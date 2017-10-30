import { Platform } from 'ionic-angular';
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
  carrinho: any;

  constructor(private afAuth: AngularFireAuth, public platform: Platform, public fb: Facebook) {
    this.carrinho = {
      valor_total: 0,
      quantidadeItens: 0,
      menuItens: []
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
  adicionarAocarrinho(item: any){
    let achou: boolean = false;
    if(this.carrinho.quantidadeItens == 0){
      this.carrinho.menuItens.push(item);
      this.carrinho.quantidadeItens += 1;
      this.carrinho.valor_total = item.preco;
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
