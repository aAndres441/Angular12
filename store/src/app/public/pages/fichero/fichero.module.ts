import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheroRoutingModule } from './fichero-routing.module';
import { FicheroComponent } from './fichero.component';


@NgModule({
  declarations: [
    FicheroComponent
  ],
  imports: [
    CommonModule,
    FicheroRoutingModule
  ]
})
export class FicheroModule { }
