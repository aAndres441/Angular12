import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

/* Modulo creado para material */
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  
  imports: [
    CommonModule,
    ClientRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    
    MaterialModule
  ]
})
export class ClientModule { }
