import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  itensDiversos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensDiversos = {
      subItens: [
        {
          titulo: 'Tapiocas Salgadas',
          itens: [
            {
              titulo: 'Tapioca só Calabresa',
              descricao: 'Côco e Calabresa',
              imagem: 'assets/img/tapiocas/calabresa.jpg',
              preco: 4
            },
            {
              titulo: 'Tapioca Calabresa com Muçarela',
              descricao: 'Côco, Calabresa e Muçarela',
              imagem: 'assets/img/tapiocas/calabresa.jpg',
              preco: 4.5
            },
            {
              titulo: 'Tapioca Calabresa com Cheddar',
              descricao: 'Côco, Cheddar e Calabresa',
              imagem: 'assets/img/tapiocas/calabresa.jpg',
              preco: 5
            },
            {
              titulo: 'Tapioca Calabresa com Cheddar e Muçarela',
              descricao: 'Côco, Muçarela, Cheddar e Calabresa',
              imagem: 'assets/img/tapiocas/calabresa.jpg',
              preco: 5.5
            },
            {
              titulo: 'Tapioca só Frango',
              descricao: 'Côco, e Frango',
              imagem: 'assets/img/tapiocas/frango.jpg',
              preco: 4
            },
            {
              titulo: 'Tapioca Frango com Muçarela',
              descricao: 'Côco, Muçarela e Frango',
              imagem: 'assets/img/tapiocas/frango.jpg',
              preco: 4.5
            },
            {
              titulo: 'Tapioca Frango com Cheddar e Muçarela',
              descricao: 'Côco, Muçarela, Cheddar e Frango',
              imagem: 'assets/img/tapiocas/frango-cheddar.jpg',
              preco: 5
            },
          ]
        },
        {
          titulo: 'Tapiocas Doces',
          itens:[
            {
              titulo: 'Tapioca só Côco',
              descricao: 'Côco',
              imagem: 'assets/img/tapiocas/coco.jpg',
              preco: 3
            },
            {
              titulo: 'Tapioca Côco com Muçarela',
              descricao: 'Côco e Muçarela',
              imagem: 'assets/img/tapiocas/coco-muçarela.jpg',
              preco: 3.5
            },
            {
              titulo: 'Tapioca Côco com Muçarela e Leite Condensado',
              descricao: 'Côco, Muçarela e Leite Condensado',
              imagem: 'assets/img/tapiocas/coco-muçarela-leite.jpg',
              preco: 4
            },
          ]

        },
        {
          titulo: 'Petiscos',
          itens: [
            {
              titulo: 'Calabresa acebolada',
              descricao: 'Porção',
              imagem: 'assets/img/petiscos/calabresa-acebolada.jpg',
              preco: 6
            }
          ]
        },
        {
          titulo: 'Bebidas',
          itens: [
            {
              titulo: 'Suco de polpa 300ml',
              imagem: 'assets/img/bebidas/suco.jpg',
              preco: 3
            },
            {
              titulo: 'Refrigerante lata 350ml',
              imagem: 'assets/img/bebidas/refrigerante.png',
              preco: 4
            },
            {
              titulo: 'Água mineral 500ml',
              imagem: 'assets/img/bebidas/agua-500.jpg',
              preco: 2
            },
            {
              titulo: 'Cerveja long neck',
              imagem: 'assets/img/bebidas/long-neck.jpg',
              preco: 4.5
            },
            {
              titulo: 'Refrigerante 1 litro',
              imagem: 'assets/img/bebidas/refri-1litro.jpg',
              preco: 6
            },
            {
              titulo: 'Skol latão',
              imagem: 'assets/img/bebidas/latao.jpg',
              preco: 4
            }
          ]
        }
      ]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

}
