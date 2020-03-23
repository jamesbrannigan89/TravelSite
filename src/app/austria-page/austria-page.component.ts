import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-austria-page',
  templateUrl: './austria-page.component.html',
  styleUrls: ['./austria-page.component.css']
})
export class AustriaPageComponent implements OnInit {

  constructor(private router:Router){

  }

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

  

}
