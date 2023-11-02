import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
