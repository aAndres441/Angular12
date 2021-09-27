import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import{ MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MODULES = [
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,    
  MatInputModule,
  MatFormFieldModule,   
  MatSliderModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
   ...MODULES
  ]
})
export class MaterialModule { }
