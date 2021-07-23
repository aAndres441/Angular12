import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{
  path: 'usuarios',
  loadChildren:()=> 
  import('./private/usuarios/usuarios.module')
  .then(m=>m.UsuariosModule)
},
{
  path: 'client',
  loadChildren:()=> 
  import('./public/pages/pages.module')
  .then(m=>m.PagesModule)
},

  {path: '', redirectTo: 'myHome' , pathMatch: 'full'},  // determinada para cuando se carga la app
  {path: '**', redirectTo: 'myHome/error' , pathMatch: 'full'},  // comodin determinada por si n o coincide ninguna direccion y siempre al final,+

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,
    scrollPositionRestoration:'enabled'}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
