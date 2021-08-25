import { Component, OnInit } from '@angular/core';
import { IfilmeApi } from '../models/IFilmeAPI.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IfilmeApi;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos= this.dadosService.pegarDados('generos');
    console.log('Filme enviado', this.filme);
  }

}
