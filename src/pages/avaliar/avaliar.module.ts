import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliarPage } from './avaliar';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    AvaliarPage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliarPage),
    Ionic2RatingModule,
  ],
})
export class AvaliarPageModule {}
