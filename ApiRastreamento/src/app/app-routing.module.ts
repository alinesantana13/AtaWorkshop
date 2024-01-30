import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ColaboradorCadastroComponent } from './pages/cadastro/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorEditarComponent } from './pages/editar/colaborador-editar/colaborador-editar.component';
import { ColaboradorDetalharComponent } from './pages/detalhar/colaborador-detalhar/colaborador-detalhar.component';
import { WorkshopCadastroComponent } from './pages/cadastro/workshop-cadastro/workshop-cadastro.component';
import { WorkshopEditarComponent } from './pages/editar/workshop-editar/workshop-editar.component';
import { WorkshopDetalharComponent } from './pages/detalhar/workshop-detalhar/workshop-detalhar.component';

const routes: Routes = [
  //{path: '', component: LoginComponent},
  {path: 'api/colaboradores', component: ColaboradoresComponent},
  {path: 'api/colaboradores/cadastro', component: ColaboradorCadastroComponent},
  {path: 'api/colaboradores/editar/:id', component: ColaboradorEditarComponent},
  {path: 'api/colaboradores/detalhar/:id', component: ColaboradorDetalharComponent},
  {path: 'api/workshops', component: WorkshopsComponent},
  {path: 'api/workshops/cadastro', component: WorkshopCadastroComponent},
  {path: 'api/workshops/editar/:id', component: WorkshopEditarComponent},
  {path: 'api/workshops/detalhar/:id', component: WorkshopDetalharComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
