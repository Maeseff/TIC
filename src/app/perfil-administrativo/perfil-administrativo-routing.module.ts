import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAdministrativoPage } from './perfil-administrativo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAdministrativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAdministrativoPageRoutingModule {}
