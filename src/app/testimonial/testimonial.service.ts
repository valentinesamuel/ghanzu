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
      'https://images.unsplash.com/photo-1608135683313-ea0883cc5446?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos',
    ),
    new Testimonial(
      'West Beatty',
      '6th generation Designer',
      'https://images.unsplash.com/photo-1608137075564-87302092f593?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos',
    ),
    new Testimonial(
      'Kirk Williamson',
      'Automated Designer',
      'https://images.unsplash.com/photo-1608228421329-b96535c8729e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt harum aliquam architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil est, voluptatibus necessitatibus illo labore laboriosam vel quod dignissimos facilis voluptatem esse pariatur saepe repudiandae assumenda iure praesentium velit perspiciatis eos',
    ),
  ];

  getTestimonial() {
    return this.testimonial.slice();
  }
}
