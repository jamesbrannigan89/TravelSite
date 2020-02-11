import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MapService{


  
    
    latitude = 53.270962;
    longitude = -9.062691;
    locationChosen = false;

    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        this.locationChosen = true;
    }
}

