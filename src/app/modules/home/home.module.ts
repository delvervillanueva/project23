import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
/* import { HomeComponent } from './page/home/home.component'; */
/* import { NavComponent  } from '../../layout/nav/nav.component'; */

/* import {  FooterComponent } from '../../layout/footer/footer.component'; */



@NgModule({
  declarations: [
 /*    HomeComponent, */
/*     NavComponent, */
    /* FooterComponent */
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
  /*   HomeComponent */
  ]
})
export class HomeModule { }
