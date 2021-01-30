import { HostListener, Component } from "@angular/core";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public windowWidth:number;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.windowWidth = platform.width();
    });
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
      this.windowWidth = window.innerWidth;
  }

}
