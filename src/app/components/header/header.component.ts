import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  // USING GETTER METHOD TO GET THE VALUE WHILE BINDING IN THE TEMPLATE AND THEN USING THE GETTER METHOD {{SELECTITEM}} invokes the getter method each time the template loads
  constructor(private sharedService: ServiceService) {}
  get selectedItem() {
    return this.sharedService.selectedItem || 'DASHBOARD';
  }

  @Output() menuBtnClicked = new EventEmitter();
  menu() {
    this.menuBtnClicked.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}
