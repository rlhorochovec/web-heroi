import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHeroisComponent } from './components/listar-herois/listar-herois.component';
import { DetalharHeroiComponent } from './components/detalhar-heroi/detalhar-heroi.component';
import { CriarHeroiComponent } from './components/criar-heroi/criar-heroi.component';

const routes: Routes = [
  { path: '', redirectTo: 'herois', pathMatch: 'full' },
  { path: 'herois', component: ListarHeroisComponent },
  { path: 'herois/:id', component: DetalharHeroiComponent },
  { path: 'criar', component: CriarHeroiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }