import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor() { }

  Touched(location:string) {
    alert('This works well from the ' + location);
  }
}
