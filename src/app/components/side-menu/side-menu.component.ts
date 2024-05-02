import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  isPanelOpen = false;
  panelOpenState = false;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
}
