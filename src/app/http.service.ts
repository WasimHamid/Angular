import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myPlaces() {
    return this.http.get('https://restcountries.eu/rest/v2/region/europe')
  }
}
