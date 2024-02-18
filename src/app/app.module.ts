import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './componentes/page/home/home.component';
import { ObjetivoComponent } from './componentes/page/objetivo/objetivo.component';
import { SobremimComponent } from './componentes/page/sobremim/sobremim.component';
import { FormacaoComponent } from './componentes/page/formacao/formacao.component';
import { CarreiraComponent } from './componentes/page/carreira/carreira.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ObjetivoComponent,
    SobremimComponent,
    FormacaoComponent,
    CarreiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
