import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ServiceComponent } from './service/service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BookingsComponent } from './bookings/bookings.component';

const appRoutes: Routes = [
  {
    path: 'appointment/:email/:purpose/:dept/:time',
    component: AppointmentComponent,
  },
  {
    path: 'footer', component: FooterComponent
  },
  { path: 'bookings', component: BookingsComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ServiceComponent,
    TestimonialComponent,
    ConsultationComponent,
    FooterComponent,
    AppointmentComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [MatIconModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
