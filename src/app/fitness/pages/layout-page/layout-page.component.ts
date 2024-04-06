import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent implements OnInit {
  loggedIn = true;
  public today = 5;
  public appPages = [
    { title: 'Today', icon: 'calendar', url: `./day/${this.today}` },
    { title: 'Calendar', icon: 'calendar', url: './calendar' },
    { title: 'Month', icon: 'map', url: './month' },
    { title: 'Week', icon: 'map', url: './week' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
