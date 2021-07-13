import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'myHome',
  component: CoreComponent,
  children: [
    {
      path: '', loadChildren: () =>
        import('./home/home.module')
          .then(m => m.HomeModule)
    },
    {
      path: 'error', loadChildren: () =>
        import('./error/error.module')
          .then(m => m.ErrorModule)
    },
    {
      path: 'header', loadChildren: () =>
        import('./header/header.module')
          .then(m => m.HeaderModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
