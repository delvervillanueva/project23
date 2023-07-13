import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Casa1Component } from './page/casa1/casa1.component';

const routes: Routes = [
  {
    path: '',
    component: Casa1Component
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
