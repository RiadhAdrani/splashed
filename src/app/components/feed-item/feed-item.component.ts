import { Component, Input, OnInit } from '@angular/core';
import { Random } from 'unsplash-js/dist/methods/photos/types';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input() item: Random = {} as Random;

  constructor() {}

  ngOnInit(): void {}
}
