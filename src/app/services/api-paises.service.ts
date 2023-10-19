import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  constructor(private http:HttpClient) { }

  getDatosPaises(pais:string): Observable<any>{
    return this.http.get (`https://restcountries.com/v3.1/name/${pais}`)
  }
}
