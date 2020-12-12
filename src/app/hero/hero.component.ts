import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrialService } from '../trial.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  root: string = 'Hero Component';
  ngOnInit(): void {}
  constructor(private trialService: TrialService) {}

  onTouch() {
    this.trialService.Touched(this.root);
  }
}
