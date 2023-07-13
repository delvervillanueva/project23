import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../layout/footer/footer.component';
import { NavComponent } from '../layout/nav/nav.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SharedModule } from '../shared/shared.module';

import { LayoutRoutingModule } from '../layout/layout-routing.module';

/* import { ContactModule } from '../modules/contact/contact.module'; */
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../modules/home/page/home/home.component';
import { SlidersComponent } from './sliders/sliders.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    SlidersComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
   /*  ContactModule, */

  ],
  exports : [
    NavComponent,
    FooterComponent,

  ]
})
export class LayoutModule { }
