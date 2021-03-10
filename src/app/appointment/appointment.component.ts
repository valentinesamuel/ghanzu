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
    purpose: string;
    time: string;
  };


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.appointmentDetails = {
        email: params['email'],
        purpose: params['purpose'],
        department: params['dept'],
        time: params['time'],
      };
      
    });
  }
  //sett
  canLeave() {
    if (confirm('Are you sure you want to go back?')) {
      if (confirm('All unsaved changes will be lost')) {
        return true;
      }
    } else {
      return false;
    }
  }
}
