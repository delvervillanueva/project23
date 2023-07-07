import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuardComponent } from './core/guard/guard.component';
import { InterceptorComponent } from './core/interceptor/interceptor.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import {HomeModule  } from './modules/home/home.module';

import { AppRoutingModule  } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { ContactModule } from './modules/contact/contact.module';
import { ComponentsModule } from './modules/components/components.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GuardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    AppRoutingModule,
    RouterModule,
    ContactModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports: [
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
