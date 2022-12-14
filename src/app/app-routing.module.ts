import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresodocenteGuard } from './guards/ingresodocente.guard';
import { IngresoestudianteGuard } from './guards/ingresoestudiante.guard';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'asignatura',
    loadChildren: () => import('./pages/asignatura/asignatura.module').then( m => m.AsignaturaPageModule),canActivate:[IngresoestudianteGuard]
    
  
  },
  
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),canActivate:[NoIngresadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),canActivate:[IngresodocenteGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),canActivate:[NoIngresadoGuard]
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'feriado',
    loadChildren: () => import('./pages/feriado/feriado.module').then( m => m.FeriadoPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'menu-docente',
    loadChildren: () => import('./pages/menu-docente/menu-docente.module').then( m => m.MenuDocentePageModule),canActivate:[IngresodocenteGuard]
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./pages/menu-estudiante/menu-estudiante.module').then( m => m.MenuEstudiantePageModule),canActivate:[IngresoestudianteGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
