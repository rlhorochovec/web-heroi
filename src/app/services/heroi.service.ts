import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Heroi } from '../models/heroi.model';

@Injectable({
  providedIn: 'root'
})

export class HeroiService {

  apiUrl: string = 'https://heroi-api.herokuapp.com/api/herois';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl, { params });
  }

  findByName(nome: any): Observable<Heroi[]> {
    return this.httpClient.get<Heroi[]>(`${this.apiUrl}?nome=${nome}`);
  }

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/delete/all`);
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
