import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'date', 'from','to','mobile','doctor'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  from: string;
  to: string;
  mobile: number;
  doctor:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Akash Nandi', date: '03-07-2023', from: '2:00',to:'3:00',mobile:9887654363,doctor:"Pankaj Vohra"},
  {position: 2, name: 'Pankti Patel', date: '04-07-2023', from: '1:00',to:'2:00',mobile:9881706036,doctor:"Prakash Iyer"},
  {position: 3, name: 'Pooja Sharma', date: '01-07-2023', from: '10:00',to:'11:00',mobile:6887954436,doctor:"Piyush Patel"},
  {position: 4, name: 'Binny Jose', date: '8-07-2023', from: '5:00',to:'6:00',mobile:8651963857,doctor:"Rahul Nair"},
  {position: 5, name: 'Birth Date', date: '09-07-2023', from: '2:00',to:'3:00',mobile:3176397785,doctor:"Nikhil Nair"},
  {position: 6, name: 'Dalerine Joseph', date: '02-07-2023', from: '1:00',to:'2:00',mobile:6522118957,doctor:"Aditya patel"},
  {position: 7, name: 'Nithin Antony', date: '10-07-2023', from: '8:00',to:'9:00',mobile:6634412289,doctor:"Arya Pillai"},
  {position: 8, name: 'Odin Jose', date: '05-07-2023', from: '10:00',to:'11:00',mobile:9977432165,doctor:"Divya Pillai"},
  {position: 9, name: 'Hari Govind', date: '06-07-2023', from: '7:00',to:'8:00',mobile:7742211098,doctor:"Rohit Pillai"},
  {position: 10, name: 'Gokul Nair', date: '11-07-2023', from: '10:00',to:'11:00',mobile:9988776655,doctor:"Hari Pillai"},
  {position: 11, name: 'Sarath Pillai', date: '07-07-2023', from: '1:00',to:'2:00',mobile:3226783426,doctor:"Siraj Vohra"},
  {position: 12, name: 'Nithin Patel', date: '20-07-2023', from: '8:00',to:'9:00',mobile:9807060532,doctor:"Amith Menon"},
  {position: 13, name: 'Yuvraj Sharma', date: '03-07-2023', from: '7:00',to:'9:00',mobile:1232154678,doctor:"Govinf Prabhu"},
  {position: 14, name: 'Karan Singh', date: '07-07-2023', from: '2:00',to:'3:00',mobile:9878656543,doctor:"Isha Sarkar"},
  {position: 15, name: 'Shubham Chaplot', date: '03-07-2023', from: '4:00',to:'5:00',mobile:7654543232,doctor:"Konkana Saha"},
  {position: 16, name: 'Sachin Sabu', date: '08-07-2023', from: '5:00',to:'6:00',mobile:8765098732,doctor:"Athil Virat"},
  {position: 17, name: 'Sanoob Nair', date: '14-07-2023', from: '9:00',to:'10:00',mobile:2987698789,doctor:"Sachin Sabu"},
  {position: 18, name: 'Saloni Singh', date: '09-07-2023', from: '6:00',to:'7:00',mobile:3241644324,doctor:"Ayush Patel"},
  {position: 19, name: 'Rejewel Jose', date: '07-07-2023', from: '1:00',to:'12:00',mobile:7654543214,doctor:"Abhi Vivek"},
  {position: 20, name: 'Arun Rijil', date: '01-07-2023', from: '2:00',to:'3:00',mobile:9876765003,doctor:"Athul Nair"},
];
