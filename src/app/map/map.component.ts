import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    console.log("event", event.target.id);
    this.apiService.fetchCountryData(event.target.id).subscribe(data => console.log('DATA!!!', data))
  }

}
