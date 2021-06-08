import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exterminador-futuro',
    loadChildren: () => import('./filmes/exterminador-futuro/exterminador-futuro.module').then( m => m.ExterminadorFuturoPageModule)
  },
  {
    path: 'rambo',
    loadChildren: () => import('./filmes/rambo/rambo.module').then( m => m.RamboPageModule)
  },
  {
    path: 'kickboxer',
    loadChildren: () => import('./filmes/kickboxer/kickboxer.module').then( m => m.KickboxerPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
