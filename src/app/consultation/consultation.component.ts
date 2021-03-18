import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from '../shared/appointments.service';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent implements OnInit {
  client = {
    clientEmail: '',
    clientPurpose: '',
    clientDepartment: '',
    clientTime: '',
  }

  buttonStatus = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,


  ) { }

  ngOnInit(): void { }
  //get the selected data from the select options
  departmentSelector(event: any) {
    this.client.clientDepartment = event.target.value;
  }
  timeSelector(event: any) {
    this.client.clientTime = event.target.value;
  }

  onSubmit(data: any) {
    this.client = {
      clientDepartment: data.clientDepartment,
      clientEmail: data.clientEmail,
      clientPurpose: data.clientPurpose,
      clientTime: data.clientTime
    }

    this.router.navigate(
      [
        'appointment',
        this.client.clientEmail,
        this.client.clientPurpose,
        this.client.clientDepartment,
        this.client.clientTime,
      ],
      {
        relativeTo: this.route,
      });



    // this.appointmentService.getAppointment().subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // )



  }




}

//Add validation
//add http
