import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private sharedService: ServiceService) {}

  selectItem(item: string) {
    this.sharedService.updateSelectedItem(item);
    console.log(this.sharedService.selectedItem, '----- service item');
  }
}
