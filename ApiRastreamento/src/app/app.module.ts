import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ColaboradorCadastroComponent } from './pages/cadastro/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorEditarComponent } from './pages/editar/colaborador-editar/colaborador-editar.component';
import { ColaboradorDetalharComponent } from './pages/detalhar/colaborador-detalhar/colaborador-detalhar.component';
import { ColaboradorFormComponent } from './componentes/colaborador-form/colaborador-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './componentes/nav/nav.component';
import { WorkshopFormComponent } from './componentes/workshop-form/workshop-form.component';
import { WorkshopCadastroComponent } from './pages/cadastro/workshop-cadastro/workshop-cadastro.component';
import { WorkshopEditarComponent } from './pages/editar/workshop-editar/workshop-editar.component';
import { WorkshopDetalharComponent } from './pages/detalhar/workshop-detalhar/workshop-detalhar.component';
import { AtaDePresencaComponent } from './pages/ata-de-presenca/ata-de-presenca.component';
import { AtadepresencaComponent } from './pages/ata/atadepresenca/atadepresenca.component';
import { AtadepresencaFormComponent } from './componentes/atadepresenca-form/atadepresenca-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopsComponent,
    ColaboradoresComponent,
    ColaboradorCadastroComponent,
    ColaboradorEditarComponent,
    ColaboradorDetalharComponent,
    ColaboradorFormComponent,
    NavComponent,
    WorkshopFormComponent,
    WorkshopCadastroComponent,
    WorkshopEditarComponent,
    WorkshopDetalharComponent,
    AtaDePresencaComponent,
    AtadepresencaComponent,
    AtadepresencaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
