import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent} from './logo/logo.component';
import { OptionsComponent } from './options/options.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LogoComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LogoComponent,
    OptionsComponent
  ]
})
export class MyComponentsModule { }
