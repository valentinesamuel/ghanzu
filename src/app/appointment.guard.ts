import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SetAppointmentService } from './set-appointment.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private appointmentService: SetAppointmentService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.appointmentService
      .canSetAppointment()
      .then((appointmentSet: boolean) => {
        if (appointmentSet) {
          return true;
        } else {
          alert('Sorry sir, you have to login first');
        }
      });
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
