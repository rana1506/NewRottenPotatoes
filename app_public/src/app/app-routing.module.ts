import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {  path: 'home',  component: HomeComponent },
  {  path: 'reviews',  component: ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
