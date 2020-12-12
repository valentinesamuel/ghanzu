import { Component, OnInit } from '@angular/core';
import { TrialService } from './trial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ghanzu';

  constructor(private trialService: TrialService) {}

  ngOnInit() {}
}
