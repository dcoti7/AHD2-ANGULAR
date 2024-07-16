import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MargaritaService {
  private apiUrl= 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
