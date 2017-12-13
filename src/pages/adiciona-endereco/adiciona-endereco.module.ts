import { BrMaskerModule } from 'brmasker-ionic-3';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaEnderecoPage } from './adiciona-endereco';




@NgModule({
  declarations: [
    AdicionaEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaEnderecoPage),
    BrMaskerModule
  ],
})
export class AdicionaEnderecoPageModule {}
