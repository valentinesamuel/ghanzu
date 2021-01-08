import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivateGuard {
  canLeave(): boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable({ providedIn: 'root' })
export class DeactivateAppointmentGuard
  implements CanDeactivate<IDeactivateGuard> {
  constructor() {}

  canDeactivate(
    component: IDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canLeave();
  }
}
