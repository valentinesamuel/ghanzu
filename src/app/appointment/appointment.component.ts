import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  email = '';
  password = '';
  dept = '';
  time = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.route.params.subscribe((params) => {
      this.email = params['email'];
    });
    this.password = this.route.snapshot.params['password'];
    this.route.params.subscribe((params) => {
      this.password = params['password'];
    });
    this.dept = this.route.snapshot.params['dept'];
    this.route.params.subscribe((params) => {
      this.dept = params['dept'];
    });

    this.time = this.route.snapshot.params['time'];
    this.route.params.subscribe((params) => {
      this.time = params['time'];
    });
  }
}
