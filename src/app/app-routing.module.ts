import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/page/home/home.component';
import { ObjetivoComponent } from './componentes/page/objetivo/objetivo.component';
import { SobremimComponent } from './componentes/page/sobremim/sobremim.component';
import { FormacaoComponent } from './componentes/page/formacao/formacao.component';
import { CarreiraComponent } from './componentes/page/carreira/carreira.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: 'home',
    pathMatch:'full'
  },

  {
    path:'home',
    component: HomeComponent
  },

  {
    path: 'objetivo',
    component: ObjetivoComponent
  },

  {
    path: 'sobremim',
    component: SobremimComponent
  },

  {
    path: 'formacao',
    component: FormacaoComponent
  },
  {
   path: 'carreira',
   component: CarreiraComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
