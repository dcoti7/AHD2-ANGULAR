import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private apiUrl= 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=wine';
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
