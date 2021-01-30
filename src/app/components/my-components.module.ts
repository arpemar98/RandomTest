import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent} from './logo/logo.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    LogoComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    OptionsComponent
  ]
})
export class MyComponentsModule { }
