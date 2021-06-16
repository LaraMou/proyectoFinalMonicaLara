import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEtiquetaComponent } from './components/crear-etiqueta/crear-etiqueta.component';
import { CrearExpertoComponent } from './components/experto-components/crear-experto/crear-experto.component';
import { EliminarEtiquetaComponent } from './components/eliminar-etiqueta/eliminar-etiqueta.component';
import { EtiquetasPageComponent } from './modules/etiquetas/etiquetas-page/etiquetas-page.component';
import { ExpertosPageComponent } from './modules/expertos/expertos-page/expertos-page.component';
import {DetalleExpertoComponent} from './components/detalle-experto/detalle-experto.component'
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { AuthGuard } from './components/guards/auth.guard';
const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'register', 
    component: RegisterPageComponent
  },

  {
    path: 'expertos', 
    component: ExpertosPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expertos/form', // http:localhost:4200/login
    component: CrearExpertoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle/:id', // http:localhost:4200/login
    component: DetalleExpertoComponent
  },
  {
    path: 'etiquetas', // http:localhost:4200/login
    component: EtiquetasPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas/form', // http:localhost:4200/login
    component: CrearEtiquetaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas/form/:id', // http:localhost:4200/login
    component: CrearEtiquetaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas/eliminar', // http:localhost:4200/login
    component: EliminarEtiquetaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ExpertosPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
