import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheroRoutingModule } from './fichero-routing.module';
import { FicheroComponent } from './fichero.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';


@NgModule({
  declarations: [
    FicheroComponent
  ],
  imports: [
    CommonModule,
    FicheroRoutingModule,
    MaterialModule,
    NgxMatFileInputModule
  ]
})
export class FicheroModule { }
