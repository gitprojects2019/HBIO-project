import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
// import { IPlayerDetails } from "../../model/players";

export interface IPlayerDetailsDisplay {
    Id: string ;
    Name:string;
    RegistrationId:string;
    GovernmentId:string;
    DateOfBirth: string;
    Age:string;
    Weight:string;
    ContactNumber:string;
    Country:string;
    State:string;
    District:string;
    Gender:string;
    TourName:string;
}

const ELEMENT_DATA: IPlayerDetailsDisplay[] = [
  { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },

   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   },
   { 
    Id:"231",Name:"adsaddddads",RegistrationId:"adsaddddads",GovernmentId:"adsaddddads", DateOfBirth:"adsaddddads", Age:"10",Weight:"20",ContactNumber:"69979797979",
    Country:"adsaddddads",State:"adsaddddads",District:"adsaddddads",Gender:"adsaddddads",TourName:"adsaddddads",
   }
 
];

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name','registrationId','governmentId', 'dateOfBirth', 'age','weight','contactNo','country','state','district','gender','tourName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
