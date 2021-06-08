import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosFilmePageRoutingModule } from './dados-filme-routing.module';

import { DadosFilmePage } from './dados-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosFilmePageRoutingModule
  ],
  declarations: [DadosFilmePage]
})
export class DadosFilmePageModule {}
