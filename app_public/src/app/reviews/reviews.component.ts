import { Component, OnInit } from '@angular/core';
import { ReviewDataService } from '../review-data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  public reviews: any;

  public message: string='';
  constructor(private reviewDataService:ReviewDataService) { }

  ngOnInit(): void {
  }

  private getReviews(): void {
    this.message = 'Searching for reviews';
    this.reviewDataService
      .getReviews()
        .then((foundReviews: string | any[]) => {
          this.message = foundReviews.length > 0 ? '' : 'No locations found';
          this.reviews = foundReviews;
        });
  }

}
