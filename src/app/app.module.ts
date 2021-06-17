import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//componentes

import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { EtiquetasTableComponent } from './components/etiquetas-table/etiquetas-table.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EtiquetasPageComponent } from './modules/etiquetas/etiquetas-page/etiquetas-page.component';
import { EliminarEtiquetaComponent } from './components/eliminar-etiqueta/eliminar-etiqueta.component';
import { CrearEtiquetaComponent } from './components/crear-etiqueta/crear-etiqueta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//componentes experto
import { CrearExpertoComponent } from './components/experto-components/crear-experto/crear-experto.component';
import { ExpertosPageComponent } from './modules/expertos/expertos-page/expertos-page.component';
import { ExpertTableComponent } from './components/experto-components/expert-table/expert-table.component';
import { ExpertoListaComponent } from './components/experto-components/experto-lista/experto-lista.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EtiquetaListaComponent } from './components/etiqueta-lista/etiqueta-lista.component';
import { DetalleExpertoComponent } from './components/detalle-experto/detalle-experto.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ExpertosPageComponent,
    ExpertTableComponent,
    EtiquetasPageComponent,
    EtiquetasTableComponent,
    CrearEtiquetaComponent,
    CrearExpertoComponent,
    EtiquetaListaComponent,
    ExpertoListaComponent,
    DetalleExpertoComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
