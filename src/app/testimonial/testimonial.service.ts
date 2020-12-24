import { Injectable } from '@angular/core';
import { Testimonial } from './testimonial.modal';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  private testimonial: Testimonial[] = [
    new Testimonial(
      'Regina Miles',
      'Arab Designer',
      '../../assets/1.jpg',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos'
    ),
    new Testimonial(
      'West Beatty',
      '6th generation Designer',
      '../../assets/2.jpg',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos'
    ),
    new Testimonial(
      'Kirk Williamson',
      'Automated Designer',
      '../../assets/3.jpg',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos'
    ),
  ];

  getTestimonial() {
    return this.testimonial.slice();
  }
}
