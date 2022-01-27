import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
