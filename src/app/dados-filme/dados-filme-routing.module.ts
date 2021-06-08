import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosFilmePage } from './dados-filme.page';

const routes: Routes = [
  {
    path: '',
    component: DadosFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosFilmePageRoutingModule {}
