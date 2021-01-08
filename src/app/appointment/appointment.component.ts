import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivateGuard } from '../shared/deactivate-appointment-guard.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit, IDeactivateGuard {
  appointmentDetails: {
    email: string;
    department: string;
    password: string;
    time: string;
  };

  copiedAppointmentDetails: {
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
      this.copiedAppointmentDetails = { ...this.appointmentDetails };
    });
  }
  //sett
  canLeave() {
    console.log(this.copiedAppointmentDetails);
    if (confirm('Are you sure you want to go back?')) {
      if (confirm('All unsaved changes will be lost')) {
        return true;
      }
    } else {
      return false;
    }
  }
}
