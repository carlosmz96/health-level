import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPageRoutingModule {}
