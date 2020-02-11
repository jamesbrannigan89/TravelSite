import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelSite';


  latitude= 53.270962;
  longitude=-9.062691;
  locationChosen = false;

  onChoseLocation(event){
    console.log(event);
    this.latitude = event.cords.lat;
    this.longitude=event.cords.lng;
    this.locationChosen =true;
  }
}
