import { Component, OnInit } from '@angular/core';
import { TrialService } from '../shared/trial.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  origin: string = 'Service Component';
  constructor(private trialService: TrialService) {}

  ngOnInit(): void {}

  onClicked() {
    this.trialService.Touched(this.origin);
  }
}
