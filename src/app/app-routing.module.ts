import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPageModule } from './login/login.module';
import { PerfilEstudiantePageModule } from './perfil-estudiante/perfil-estudiante.module';
import { PerfilDocentePageModule } from './perfil-docente/perfil-docente.module';
import { PerfilAdministrativoPageModule } from './perfil-administrativo/perfil-administrativo.module'


const routes: Routes = [
  
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'perfil', loadChildren: () => import('./perfil-estudiante/perfil-estudiante.module').then(m => m.PerfilEstudiantePageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'programa',
    loadChildren: () => import('./programa/programa.module').then( m => m.ProgramaPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-estudiante',
    loadChildren: () => import('./perfil-estudiante/perfil-estudiante.module').then( m => m.PerfilEstudiantePageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'perfil-administrativo',
    loadChildren: () => import('./perfil-administrativo/perfil-administrativo.module').then( m => m.PerfilAdministrativoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
