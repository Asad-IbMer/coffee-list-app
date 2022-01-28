import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})


export class CoffeeDataService {
  url ='https://random-data-api.com/api/coffee/random_coffee?size=50';
  constructor(private http:HttpClient) { }

  coffees(){
    return this.http.get(this.url);
  }
}
