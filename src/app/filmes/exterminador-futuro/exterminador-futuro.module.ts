import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExterminadorFuturoPageRoutingModule } from './exterminador-futuro-routing.module';

import { ExterminadorFuturoPage } from './exterminador-futuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExterminadorFuturoPageRoutingModule
  ],
  declarations: [ExterminadorFuturoPage]
})
export class ExterminadorFuturoPageModule {}
