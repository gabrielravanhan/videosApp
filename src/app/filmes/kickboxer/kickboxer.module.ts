import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KickboxerPageRoutingModule } from './kickboxer-routing.module';

import { KickboxerPage } from './kickboxer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KickboxerPageRoutingModule
  ],
  declarations: [KickboxerPage]
})
export class KickboxerPageModule {}
