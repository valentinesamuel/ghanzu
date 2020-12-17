import { Component, OnInit } from '@angular/core';
import { Testimonial } from './testimonial.modal';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  switchController: number = 0;
  testimonials: Testimonial[];
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

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonial();
  }
}
