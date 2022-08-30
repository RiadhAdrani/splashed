import { Component } from '@angular/core';
import { AppBarItem } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navBarItems: Array<AppBarItem> = [
    { icon: 'home', path: '/' },
    { icon: 'info', path: '/about' },
  ];
}
