import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get("https://restcountries.com/v3.1/lang/spanish")
      .pipe(map((data: any)=>{
        return data.map((pais: any)=>{
          return {
            region: pais.region,
            nombre: pais.name.common,
            lengua: pais.languages.spa
          }
        })
      }));
  }
}
