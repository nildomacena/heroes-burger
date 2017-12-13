import { CallNumber } from '@ionic-native/call-number';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SuperTabsController,SuperTabsModule } from 'ionic2-super-tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HeaderColor } from '@ionic-native/header-color';
import { GoogleMaps } from '@ionic-native/google-maps';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { Sim } from '@ionic-native/sim';

import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilProvider } from '../providers/util/util';
import { FireProvider } from '../providers/fire/fire';
import { HttpModule, Http } from '@angular/http';


const config = {
        apiKey: "AIzaSyBicF0oeyGcCQ5sr8QvNsjg6qphf0Dmjio",
        authDomain: "hero-burguer.firebaseapp.com",
        databaseURL: "https://hero-burguer.firebaseio.com",
        projectId: "hero-burguer",
        storageBucket: "hero-burguer.appspot.com",
        messagingSenderId: "988738797804"
      };

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpModule
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SuperTabsController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilProvider,
    GoogleMaps,
    HeaderColor,
    ScreenOrientation,
    CallNumber,
    FireProvider,
    Facebook,
    Sim
  ]
})
export class AppModule {}
