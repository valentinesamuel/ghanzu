import { Component, OnInit } from '@angular/core';
import { Testimonial } from './testimonial.modal';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {

  testimonials: Testimonial[];
  

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonial();
  }
}
