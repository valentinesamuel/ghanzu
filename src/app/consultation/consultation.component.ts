import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clientEmail = '';
  clientPassword = '';
  clientDepartment = '';
  clientTime = '';

  //get the selected data from the select options
  departmentSelector(event: any) {
    this.clientDepartment = event.target.value;
  }
  timeSelector(event: any) {
    this.clientTime = event.target.value;
  }

  //log all user details to the console
  submitter() {
    console.log(this.clientEmail);
    console.log(this.clientPassword);
    console.log(this.clientDepartment);
    console.log(this.clientTime);
  }

  //
}

// todo: Setup  routes
// todo: set up query parameters
// todo: pass the parameters through the routes
// !Get the parameters from the route to the page
// !Display them in the details page
// ? Create wildCard routes
//
