import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  requiredAlert: string = "This Field is required";
  currentDate = new Date().toISOString().split('T')[0];
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
  playerDetailsForm: FormGroup;

 test:false;
 
  constructor(private fb:FormBuilder) {
    this.playerDetailsForm = fb.group({
      'firstName': [null,Validators.required],
      'middleName': "",
      'lastName': [null,Validators.required],
      'regId': "",
      'govId': "",
      'govIdType': "",
      'dob': [null,Validators.required],
      'contact': "",
      'age': [null,Validators.required],
      'weight': [null,Validators.required],
      'country': "",
      'state': "",
      'district': "",
      'tourName': "",
      'tourPlace': "",
      'tourDate': ""
    });
   }


  ngOnInit() {
  }


  onSubmit(post) {
    // console.log(post.firstName);
    console.log(this.playerDetailsForm.value);
  }


}
