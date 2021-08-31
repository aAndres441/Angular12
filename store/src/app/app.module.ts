import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesModule } from './public/pages/pages.module';
import { CoreModule } from '@file-public/core/core.module';


import { CustomizedComponent } from './customized/customized.component';
import { HttpClientModule } from '@angular/common/http';


const MODULES = [ 
  PagesModule,
  CoreModule
]


@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    ...MODULES,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
