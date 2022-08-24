import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {
  private apiBaseUrl = 'http://localhost:3000/api';
  getReviews() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
