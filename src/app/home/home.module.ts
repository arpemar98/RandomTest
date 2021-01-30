import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MyComponentsModule } from '../components/my-components.module';
import { PopOverPageModule } from './pop-over/pop-over.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyComponentsModule,
    PopOverPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
