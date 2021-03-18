import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppointmentsService } from '../shared/appointments.service';


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


  constructor(private route: ActivatedRoute, private router: Router,
    private appointmentService: AppointmentsService) { }

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

  BookNow() {
    alert('Are you sure you want to book an appointment?')
    this.appointmentService.makeAppointment(this.appointmentDetails.email, this.appointmentDetails.purpose, this.appointmentDetails.department, this.appointmentDetails.time).subscribe(responseData => {
    }, error => { console.log(error); }
    );
  }

  cancelBooking() {
    this.router.navigate(['/']);
  }
}
