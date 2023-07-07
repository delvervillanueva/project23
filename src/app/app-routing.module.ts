import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Ruta principal
import { HomeComponent } from './modules/home/page/home/home.component';

//Rutas hijas
import { ContactComponent } from './modules/contact/page/contact/contact.component'

import { NavComponent } from './layout/nav/nav.component'
import { LayoutComponent } from './layout/layout.component';

// Components - Casas
import { Casa1Component } from './modules/components/page/casa1/casa1.component';
import { Casa2Component } from './modules/components/page/casa2/casa2.component';


const routes: Routes = [

  {path: 'contacto', component: ContactComponent},
  /* {path: 'home', component: HomeComponent},   */
  {path: 'casa-lara', component: Casa1Component},
  {path: 'casa-tacshana', component: Casa2Component},

  {path: '', component: LayoutComponent},

  {path: '', redirectTo: '', pathMatch: 'full'},


];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

