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
  constructor(private afAuth: AngularFireAuth, public platform: Platform, public fb: Facebook) {
    console.log('Hello FireProvider Provider');
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

  signOut() {
    this.afAuth.auth.signOut();
  }

}
