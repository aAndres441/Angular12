import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';


import{ MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ClientComponent
  ],
  
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    ClientRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class ClientModule { }
