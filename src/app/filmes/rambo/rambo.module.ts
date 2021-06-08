import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamboPageRoutingModule } from './rambo-routing.module';

import { RamboPage } from './rambo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamboPageRoutingModule
  ],
  declarations: [RamboPage]
})
export class RamboPageModule {}
