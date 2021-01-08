import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointmentDetails: {
    email: string;
    department: string;
    password: string;
    time: string;
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.appointmentDetails = {
        email: params['email'],
        password: params['password'],
        department: params['dept'],
        time: params['time'],
      };
    });
  }
  //sett
}
