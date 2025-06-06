import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { InicioComponent } from './app/pages/inicio/inicio.component';
import { AgregarComponent } from './app/pages/agregar/agregar.component';
import { BuscarComponent } from './app/pages/buscar/buscar.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'buscar', component: BuscarComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));