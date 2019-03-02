import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palyer-details',
  templateUrl: './palyer-details.component.html',
  styleUrls: ['./palyer-details.component.css']
})
export class PalyerDetailsComponent implements OnInit {

 // govIdTypes:["School Id card","Aadhar","License","Pancard"];
  govIdTypes =  [
    {value: '0', viewValue: 'Select an option'},
    {value: '1', viewValue: 'School Id card'},
    {value: '2', viewValue: 'Aadhar'},
    {value: '3', viewValue: 'License'}
  ];
  countries =  [
    {value: '0', viewValue: 'Select an country'},
    {value: '1', viewValue: 'School Id card'},
    {value: '2', viewValue: 'Aadhar'},
    {value: '3', viewValue: 'License'}
  ];
  states =  [
    {value: '0', viewValue: 'Select an state'},
    {value: '1', viewValue: 'School Id card'},
    {value: '2', viewValue: 'Aadhar'},
    {value: '3', viewValue: 'License'}
  ];
  districts =  [
    {value: '0', viewValue: 'Select an district'},
    {value: '1', viewValue: 'School Id card'},
    {value: '2', viewValue: 'Aadhar'},
    {value: '3', viewValue: 'License'}
  ];
  cities =  [
    {value: '0', viewValue: 'Select an city'},
    {value: '1', viewValue: 'School Id card'},
    {value: '2', viewValue: 'Aadhar'},
    {value: '3', viewValue: 'License'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
