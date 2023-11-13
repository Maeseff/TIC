import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login/login.page';
import { PerfilDocentePage } from './perfil-docente/perfil-docente.page';
import { PerfilEstudiantePage } from './perfil-estudiante/perfil-estudiante.page';
import { PerfilAdministrativoPage } from './perfil-administrativo/perfil-administrativo.page';


const routes: Routes = [
  
  { path: '', component: LoginPage },
  { path: 'perfil-docente', component: PerfilDocentePage },
  { path: 'perfil-estudiante', component: PerfilEstudiantePage },
  { path: 'perfil-administrativo', component: PerfilAdministrativoPage },
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
