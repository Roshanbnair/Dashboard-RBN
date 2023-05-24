import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'designation', 'mobile','date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  designation: string;
  mobile: number;
  date: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Akash Nandi', date: '03-07-2023', mobile:9887654363,designation:"Pharmacist"},
  {position: 2, name: 'Pankti Patel', date: '04-07-2023', mobile:9881706036,designation:"Physicist"},
  {position: 3, name: 'Pooja Sharma', date: '01-07-2023', mobile:6887954436,designation:"Neurologist"},
  {position: 4, name: 'Binny Jose', date: '8-07-2023', mobile:8651963857,designation:"Surgeon"},
  {position: 5, name: 'Birth Date', date: '09-07-2023', mobile:3176397785,designation:"Pharmacist"},
  {position: 6, name: 'Dalerine Joseph', date: '02-07-2023', mobile:6522118957,designation:"Surgeon"},
  {position: 7, name: 'Nithin Antony', date: '10-07-2023', mobile:6634412289,designation:"Surgeon"},
  {position: 8, name: 'Odin Jose', date: '05-07-2023', mobile:9977432165,designation:"Pharmacist"},
  {position: 9, name: 'Hari Govind', date: '06-07-2023', mobile:7742211098,designation:"Nephrologist "},
  {position: 10, name: 'Gokul Nair', date: '11-07-2023', mobile:9988776655,designation:"Nephrologist "},
  {position: 11, name: 'Sarath Pillai', date: '07-07-2023', mobile:3226783426,designation:"Nephrologist"},
  {position: 12, name: 'Nithin Patel', date: '20-07-2023', mobile:9807060532,designation:"Pharmacist"},
  { position: 13, name: 'Yuvraj Sharma', date: '03-07-2023', mobile: 1232154678, designation: "Physicist" },
  {position: 14, name: 'Karan Singh', date: '07-07-2023', mobile:9878656543,designation:"Physicist"},
  {position: 15, name: 'Shubham Chaplot', date: '03-07-2023', mobile:7654543232,designation:"Physicist"},
  {position: 16, name: 'Sachin Sabu', date: '08-07-2023', mobile:8765098732,designation:"Lab-Attender"},
  {position: 17, name: 'Sanoob Nair', date: '14-07-2023', mobile:2987698789,designation:"Lab-Doctor"},
  {position: 18, name: 'Saloni Singh', date: '09-07-2023', mobile:3241644324,designation:"Pharmacist"},
  {position: 19, name: 'Rejewel Jose', date: '07-07-2023', mobile:7654543214,designation:"Physicist"},
  {position: 20, name: 'Arun Rijil', date: '01-07-2023', mobile:9876765003,designation:"Physicist"},
];
