import { Component, OnInit } from '@angular/core';
import { HeroiService } from 'src/app/services/heroi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroi } from 'src/app/models/heroi.model';

@Component({
  selector: 'app-detalhar-heroi',
  templateUrl: './detalhar-heroi.component.html',
  styleUrls: ['./detalhar-heroi.component.css']
})
export class DetalharHeroiComponent implements OnInit {

  currentHeroi: Heroi = {
    nome: '',
    nomeCivil: '',
    universo: ''
  };
  message = '';

  constructor(
    private heroiService: HeroiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getItem(this.route.snapshot.params['id']);
  }

  getItem(id: string): void {
    this.heroiService.getItem(id)
      .subscribe(
        data => {
          this.currentHeroi = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateItem(): void {
    this.message = '';

    this.heroiService.update(this.currentHeroi.id, this.currentHeroi)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Herói atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteItem(): void {
    this.heroiService.delete(this.currentHeroi.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/herois']);
        },
        error => {
          console.log(error);
        });
  }
}