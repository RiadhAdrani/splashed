import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { unsplash } from 'src/api';
import { Random } from 'unsplash-js/dist/methods/photos/types';
import feed from '../local/feed';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private feed: Array<Random> = [];
  private subject = new Subject<Array<Random>>();

  constructor() {}

  fetchFeed(onSuccess: (items: Random[]) => void): void {
    unsplash.photos
      .getRandom({ count: 100, query: 'nature' })
      .then((res) => {
        const response = res.response! as Random[];
        this.feed = response;

        console.log(response);

        onSuccess(response);
      })
      .catch((err) => {
        onSuccess(feed);
      });
  }

  getFeed(): Observable<Array<Random>> {
    return this.subject.asObservable();
  }
}
