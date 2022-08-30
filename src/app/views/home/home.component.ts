import { Component, OnInit } from '@angular/core';
import { unsplash } from 'src/api';
import { FeedService } from 'src/app/services/feed.service';
import { Random } from 'unsplash-js/dist/methods/photos/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private featured: string = '';
  feed: Random[] = [];

  constructor(private feedService: FeedService) {}

  featuredToURL(): string {
    return `url('${this.featured}')`;
  }

  ngOnInit(): void {
    this.feedService.fetchFeed((items: Random[]) => {
      this.feed = items;
    });
  }
}
