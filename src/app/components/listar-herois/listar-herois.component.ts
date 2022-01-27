import { Component, OnInit } from '@angular/core';
import { Heroi } from 'src/app/models/heroi.model';
import { HeroiService } from 'src/app/services/heroi.service';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.css']
})
export class ListarHeroisComponent implements OnInit {

  herois: Heroi[] = [];
  currentHeroi: Heroi = {};
  currentIndex = -1;
  nome = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private heroiService: HeroiService) { }

  ngOnInit(): void {
    this.listar();
  }

  getRequestParams(searchName: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchName) {
      params[`nome`] = searchName;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  listar(): void {
    const params = this.getRequestParams(this.nome, this.page, this.pageSize);

    this.heroiService.getAll(params)
      .subscribe(
        response => {
          const { herois, totalItems } = response;
          this.herois = herois;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.listar();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.listar();
  }

  searchName(): void {
    this.page = 1;
    this.listar();
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
}