import { Component, OnInit } from '@angular/core';
import { Heroi } from 'src/app/models/heroi.model';
import { HeroiService } from 'src/app/services/heroi.service';

@Component({
  selector: 'app-criar-heroi',
  templateUrl: './criar-heroi.component.html',
  styleUrls: ['./criar-heroi.component.css']
})
export class CriarHeroiComponent implements OnInit {

  heroi: Heroi = {
    nome: '',
    nomeCivil: '',
    universo: ''
  };
  submitted = false;

  universos = ['Marvel', 'DC'];

  constructor(private heroiService: HeroiService) { }

  ngOnInit(): void {
  }

  salvar(): void {
    const data = {
      nome: this.heroi.nome,
      nomeCivil: this.heroi.nomeCivil,
      universo: this.heroi.universo
    };

    this.heroiService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  novo(): void {
    this.submitted = false;
    this.heroi = {
      nome: '',
      nomeCivil: '',
      universo: ''
    };
  }
}
