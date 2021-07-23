import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VigilanteGuardGuard}from './../../guards/vigilante-guard.guard'

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'client',
    component: PagesComponent, /* canActivateChild:[VigilanteGuardGuard], */
    children: [
      {
        path: '', loadChildren: () =>
          import('./client/client.module')
            .then(m => m.ClientModule)
      },
      {
        path: 'fichero', loadChildren: () =>
          import('./fichero/fichero.module')
            .then(m => m.FicheroModule)/*  ,canActivateChild:[VigilanteGuardGuard] */
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
