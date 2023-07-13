import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarScrollyDirective } from './directives/navbar-scrolly.directive';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarScrollyDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarScrollyDirective
  ]
})
export class SharedModule { }
