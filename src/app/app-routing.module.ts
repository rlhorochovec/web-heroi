import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHeroisComponent } from './components/listar-herois/listar-herois.component';
import { DetalharHeroiComponent } from './components/detalhar-heroi/detalhar-heroi.component';
import { CriarHeroiComponent } from './components/criar-heroi/criar-heroi.component';
import { EnviarImagemComponent } from './components/enviar-imagem/enviar-imagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'herois', pathMatch: 'full' },
  { path: 'herois', component: ListarHeroisComponent },
  { path: 'herois/:id', component: DetalharHeroiComponent },
  { path: 'criar', component: CriarHeroiComponent },
  { path: 'imagem', component: EnviarImagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }