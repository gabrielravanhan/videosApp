import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KickboxerPage } from './kickboxer.page';

const routes: Routes = [
  {
    path: '',
    component: KickboxerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KickboxerPageRoutingModule {}
