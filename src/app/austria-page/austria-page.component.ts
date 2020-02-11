import { Component, OnInit } from '@angular/core';
import { MapService } from '../Services/googleMap.service';

@Component({
  selector: 'app-austria-page',
  templateUrl: './austria-page.component.html',
  styleUrls: ['./austria-page.component.css']
})
export class AustriaPageComponent implements OnInit {

 

    latitude = 48.210033;
    longitude = 16.363449;
    locationChosen = false;
  
    onChoseLocation(event) {

        
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
      this.locationChosen = true;
  }
  

  ngOnInit() {
  }

}
