import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  fetchCountryData(country: string) {
    let subject = new Subject
    let api = `https://api.worldbank.org/v2/country/${country}?format=json`;
    console.log('HERE!!!!')
    console.log(this.http.get(api))
    console.log('EDN!!!')
    return this.http.get(api);
  }
  
  
}
