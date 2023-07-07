import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as AOS from 'aos';


declare var gtag :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devilla Inmobiliaria';

  ngOnInit() {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }



    constructor(
      private router: Router
    ) {
      const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: any) => {
        gtag('config', 'G-SWB5BTHFWS', {
          'page_path': event.urlAfterRedirects
        });
      });
    }
  }


