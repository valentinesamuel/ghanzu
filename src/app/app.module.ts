import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ServiceComponent } from './service/service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ConsultationComponent } from './consultation/consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ServiceComponent,
    TestimonialComponent,
    ConsultationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
