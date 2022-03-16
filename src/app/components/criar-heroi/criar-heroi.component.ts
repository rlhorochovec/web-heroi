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
    name: '',
    civil: '',
    universe: ''
  };
  submitted = false;

  universes = ['Marvel', 'DC'];

  constructor(private heroiService: HeroiService) { }

  ngOnInit(): void {
  }

  salvar(): void {
    const data = {
      name: this.heroi.name,
      civil: this.heroi.civil,
      universe: this.heroi.universe
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
      name: '',
      civil: '',
      universe: ''
    };
  }
}
