import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { FilmeService } from '../services/filme.service';
import { IfilmeApi, IListaFilmes } from '../models/IFilmeAPI.model';
import { GeneroService } from '../services/genero.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'O Exterminador do Futuro (1984)',
      lancamento: '25/03/1985',
      duracao: '1h 47m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fo4SSoNT1ASI4JP7dOLrosWNWKa.jpg',
      generos: ['Ação', 'Thriller', 'Ficção científica'],
      pagina: '/exterminador-futuro'
    },

    {
      nome: 'Rambo: Programado Para Matar (1982)',
      lancamento: '06/11/1982',
      duracao: '1h 34m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6ocBqNSqG1hWbzjv2sZxLc07nLs.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      pagina: '/rambo'
    },

    {
      nome: 'Kickboxer: O Desafio do Dragão (1989)',
      lancamento: '09/09/1989',
      duracao: '1h 37m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e50XYhyoaJpJUNn18Fs4FsZgtfx.jpg',
      generos: ['Ação', 'Thriller'],
      pagina: '/kickboxer'
    },
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IfilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

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
      color: 'azul-escuro'
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados => {
      console.log('Generos', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }
}