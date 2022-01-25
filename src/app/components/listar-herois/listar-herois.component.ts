import { Component, OnInit } from '@angular/core';
import { Heroi } from 'src/app/models/heroi.model';
import { HeroiService } from 'src/app/services/heroi.service';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.css']
})
export class ListarHeroisComponent implements OnInit {

  herois?: Heroi[];
  currentHeroi: Heroi = {};
  currentIndex = -1;
  nome = '';

  constructor(private heroiService: HeroiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.heroiService.list()
      .subscribe(
        data => {
          this.herois = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  recarregar(): void {
    this.listar();
    this.currentHeroi = {};
    this.currentIndex = -1;
  }

  selecionar(heroi: Heroi, index: number): void {
    this.currentHeroi = heroi;
    this.currentIndex = index;
  }

  limpar(): void {
    this.heroiService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.recarregar();
        },
        error => {
          console.log(error);
        });
  }

  pesquisar(): void {
    this.currentHeroi = {};
    this.currentIndex = -1;

    this.heroiService.findByName(this.nome)
      .subscribe(
        data => {
          this.herois = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}