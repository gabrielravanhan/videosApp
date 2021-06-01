import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';

  listaVideos: IFilme[] = [
    {
      nome: 'O Exterminador do Futuro (1984)',
      lancamento: '25/03/1985',
      duracao: '1h 47m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fo4SSoNT1ASI4JP7dOLrosWNWKa.jpg',
      generos: ['Ação', 'Thriller', 'Ficção científica']
    },

    {
      nome: 'Rambo: Programado Para Matar (1982)',
      lancamento: '06/11/1982',
      duracao: '1h 34m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6ocBqNSqG1hWbzjv2sZxLc07nLs.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra']
    },

    {
      nome: 'Kickboxer: O Desafio do Dragão (1989)',
      lancamento: '09/09/1989',
      duracao: '1h 37m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e50XYhyoaJpJUNn18Fs4FsZgtfx.jpg',
      generos: ['Ação', 'Thriller']
    },
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }
}
