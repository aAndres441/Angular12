import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsuariosRoutingModule } from './usuarios-routing.module';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarComponent } from './editar/editar.component';
import { CustomizedComponent } from 'src/app/customized/customized.component';

const MODULES=[
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,    
    UsuariosRoutingModule
]

const COMPONENTS = [
  LoginComponent,
  ListadoComponent,
  UsuarioComponent,
  EditarComponent,
  CustomizedComponent
]

@NgModule({
  declarations: [
   ...COMPONENTS
  ],
  
  imports: [
    ...MODULES
  ]
})
export class UsuariosModule { }
