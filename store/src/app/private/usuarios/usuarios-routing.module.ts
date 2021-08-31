import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    children:[      
      {path:'listado',component:ListadoComponent},
      {path:'editar',component:EditarComponent},
      {path:'login',component:LoginComponent},
      {path:'usuario',component:UsuarioComponent},
      {path:'**',redirectTo:'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
