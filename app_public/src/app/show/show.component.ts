import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Review } from '../classes/review';
import { Comment } from '../classes/comment';
import { ReviewDataService } from '../review-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public review: Review = new Review;
  public message: string='';
  public author: String='aaaaaa'
  constructor(private reviewDataService:ReviewDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('reviewId')
          return this.reviewDataService.geReviewById(id as string);
        })
      )
      .subscribe((review: Review) => {
        this.review = review;
        console.log(review.author)
        //this.author=review.author
      });
  }



}
