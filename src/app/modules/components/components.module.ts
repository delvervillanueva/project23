import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { Casa1Component } from './page/casa1/casa1.component';
import { Casa2Component } from './page/casa2/casa2.component';

import { LayoutModule } from '../../layout/layout.module';


@NgModule({
  declarations: [
    Casa1Component,
    Casa2Component
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutModule
  ]
})
export class ComponentsModule { }
