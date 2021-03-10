import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent implements OnInit {
  clientEmail = '';
  clientPurpose = '';
  clientDepartment = '';
  clientTime = '';
  buttonStatus = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {}
  //get the selected data from the select options
  departmentSelector(event: any) {
    this.clientDepartment = event.target.value;
  }
  timeSelector(event: any) {
    this.clientTime = event.target.value;
  }

  submitter() {

    this.router.navigate(
      [
        'appointment',
        this.clientEmail,
        this.clientPurpose,
        this.clientDepartment,
        this.clientTime,
      ],
      {
        relativeTo: this.route,
      }
    );
  }

  
}

