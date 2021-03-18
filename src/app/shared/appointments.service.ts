import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  makeAppointment(appEmail: string, appPurpose: string, appDepartment: string, appTime: string) {
    const appointmentData: Appointment = { email: appEmail, purpose: appPurpose, department: appDepartment, time: appTime };
    return this.http.post('https://ghanzu-aa740-default-rtdb.firebaseio.com/posts.json', appointmentData)
  }

  getAppointment() {
    return this.http.get('https://ghanzu-aa740-default-rtdb.firebaseio.com/posts.json').pipe(map(
      rawData => {
        const appointmentArray: Appointment[] = [];
        for (const key in rawData) {
          if (rawData.hasOwnProperty(key)) {
            appointmentArray.push({ ...rawData[key], id: key })
          }
        }
        return appointmentArray;
      }
    ));

  }

  deleteAppointment() {
    return this.http.delete('https://ghanzu-aa740-default-rtdb.firebaseio.com/posts.json')
  }
}
