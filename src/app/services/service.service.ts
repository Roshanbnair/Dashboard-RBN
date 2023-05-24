import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  selectedItem: string="";
  updateSelectedItem(item: string) {
    this.selectedItem = item;
  }

  // function getInitials(name: string): string {
  //   const initials: string[] = name.split(" ").map((word: string) => word.charAt(0).toUpperCase());
  //   return initials.join("");
  // }
  
  // const fullName: string = "John Doe";
  // const initials: string = getInitials(fullName);
  // console.log(initials); // Output: "JD"
  
  
}
