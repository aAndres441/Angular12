import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pauli',
    component: PagesComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./client/client.module')
            .then(m => m.ClientModule)
      },
      {
        path: 'fichero', loadChildren: () =>
          import('./fichero/fichero.module')
            .then(m => m.FicheroModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
