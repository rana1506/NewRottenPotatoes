import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrameworkComponent } from './framework/framework.component';

import { ReviewDataService } from './review-data.service';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrameworkComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ReviewDataService],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
