import { Component, OnInit } from '@angular/core';
import { Review } from '../classes/review';
import { ReviewDataService } from '../review-data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews: Review[] = [];
  public message: string='';

  constructor(private reviewDataService:ReviewDataService) { }

  ngOnInit(): void {
    this.getReviews()
  }

  private getReviews(): void {
    this.message = 'Searching for reviews';
    this.reviewDataService
      .getReviews()
        .then((foundReviews: Review[]) => {
          this.message = foundReviews.length > 0 ? '' : 'No reviews found';
          this.reviews = foundReviews;
        });
  }

}
