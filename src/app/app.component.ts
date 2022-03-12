import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController
  ) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  selectPage() {
    this.menu.close('first');
  }
}
