import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheroComponent } from './fichero.component';

const routes: Routes = [
  {path:'',component:FicheroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheroRoutingModule { }
