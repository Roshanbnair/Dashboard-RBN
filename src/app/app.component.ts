import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-management';
  sidebarOpened: boolean= true;
  menu() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
