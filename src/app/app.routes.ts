import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'agregar',
    component: AgregarComponent,
  },
];
