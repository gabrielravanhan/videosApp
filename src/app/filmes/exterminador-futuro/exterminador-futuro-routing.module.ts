import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExterminadorFuturoPage } from './exterminador-futuro.page';

const routes: Routes = [
  {
    path: '',
    component: ExterminadorFuturoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExterminadorFuturoPageRoutingModule {}
