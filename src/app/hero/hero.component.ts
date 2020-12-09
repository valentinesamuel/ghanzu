import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() touch = new EventEmitter();

  onTouch() {
    this.touch.emit(
      alert('This is direct from the hero to know how i can pass data')
    );
  }
}
