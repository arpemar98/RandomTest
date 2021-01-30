import { HostListener, Component } from "@angular/core";
import { Platform } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopOverPage} from './pop-over/pop-over.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public windowWidth:number;

  constructor(public popoverController: PopoverController, platform: Platform) {
    platform.ready().then(() => {
      this.windowWidth = platform.width();
    });
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
      this.windowWidth = window.innerWidth;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
