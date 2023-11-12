import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAdministrativoPageRoutingModule } from './perfil-administrativo-routing.module';

import { PerfilAdministrativoPage } from './perfil-administrativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAdministrativoPageRoutingModule
  ],
  declarations: [PerfilAdministrativoPage]
})
export class PerfilAdministrativoPageModule {}
