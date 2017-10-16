import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalItemDetailPage } from './modal-item-detail';

@NgModule({
  declarations: [
    ModalItemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalItemDetailPage),
  ],
})
export class ModalItemDetailPageModule {}
