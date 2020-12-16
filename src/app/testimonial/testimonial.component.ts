import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent {
  switchController: number = 0;

  checker() {
    if (this.switchController < 3) {
      this.switchController++;
      console.log(this.switchController);
    } else if (this.switchController === 3) {
      this.switchController = 0;
    } else {
      console.log('It made it to the false block');
    }
  }
}
