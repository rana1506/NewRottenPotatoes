import {Review} from './classes/review'
import {Comment} from './classes/comment'

import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getReviews();
  }
  getReviews() : Promise<Review[]>{
    const url: string = `${this.apiBaseUrl}/reviews`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Review[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}
