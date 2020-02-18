import { Component, OnInit } from '@angular/core';
import { MapService } from '../Services/googleMap.service';

@Component({
  selector: 'app-austria-page',
  templateUrl: './austria-page.component.html',
  styleUrls: ['./austria-page.component.css']
})
export class AustriaPageComponent implements OnInit {

 

    latitude = 47.5162;
    longitude = 14.5501;
    locationChosen = false;
  
    onChoseLocation(event) {

        
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
      this.locationChosen = true;
  }
  

  ngOnInit() {
  }

  austria= [
    {
      city:'Salzburg',
      imageUrl:"/assets/img/salzburg.jpg",
      imageAlt:"Salzburg",
      description:" A collection of photos from salzburg"
    },

    {
      city:'Hallstatt',
      description:" A collection of photos from Hallstat",
      imageUrl:"/assets/img/hallstatt.jpg",
      imageAlt:"Hallstat",
    },

    {
      city:'Vienna',
     imageUrl:"/assets/img/vienna.jpg",
      description:" A collection of photos from Vienna"
    }
  ]

}
