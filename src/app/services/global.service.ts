import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { unsplash } from 'src/api';
import { GlobalData } from 'src/types';
import { Random } from 'unsplash-js/dist/methods/photos/types';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  data: GlobalData = { featured: '' };

  constructor() {
    unsplash.photos.getRandom({ query: 'nature' }).then((res) => {
      const response = res.response! as Random;

      this.data = { featured: response.urls.full };
    });
  }

  getData(): Observable<GlobalData> {
    return of(this.data);
  }
}
