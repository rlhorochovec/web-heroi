import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarHeroiComponent } from './components/criar-heroi/criar-heroi.component';
import { DetalharHeroiComponent } from './components/detalhar-heroi/detalhar-heroi.component';
import { ListarHeroisComponent } from './components/listar-herois/listar-herois.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarHeroiComponent,
    DetalharHeroiComponent,
    ListarHeroisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
