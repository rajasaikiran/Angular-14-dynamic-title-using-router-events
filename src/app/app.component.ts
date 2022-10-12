import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'route-title';

  constructor(
    private titleService: Title,
    private router: Router,
    private activePage: ActivatedRoute
  ) {}

  ngOnInit() {
    this.changeTitle();
  }

  changeTitle() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationEnd:
          let child = this.activePage.firstChild!;
          // this.titleService.setTitle(child.snapshot.data.title);
          this.titleService.setTitle(child.snapshot.data['title']);
          break;

        default:
          break;
      }
    });
  }
}
