import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SetAppointmentService {
  constructor() {}
  setAppointment = false;

  canSetAppointment() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.setAppointment);
      }, 800);
    });
    return promise;
  }

  LogIn() {
    this.setAppointment = true;
    alert('You have sucessfully logged in');
  }

  LogOut() {
    this.setAppointment = false;
    alert('You have sucessfully logged out');
  }
}
