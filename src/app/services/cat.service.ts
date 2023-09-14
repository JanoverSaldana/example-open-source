import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  baseUrl = environment.baseUrl;
  apiKey= environment.apiKey;

  constructor( private http: HttpClient) { }


  getCatsList(){
    return this.http.get(`${this.baseUrl}/breeds?api_key=${this.apiKey}`);
  }
}
