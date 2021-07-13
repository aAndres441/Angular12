import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
/* import { HeaderComponent } from './header/header.component'; */
import { CoreComponent } from './core.component';
/* import { HeaderComponent } from './header/header.component';
 */


const COMPONENTS = [
  FooterComponent,
  NavbarComponent,
 /*  HeaderComponent, */
  CoreComponent
]

@NgModule({

  declarations: [
   ...COMPONENTS
  ],

  imports: [
    CommonModule,
    CoreRoutingModule
  ]

})

export class CoreModule { }
