import { Component, OnInit } from '@angular/core';
import { MapService } from '../Services/googleMap.service';

@Component({
  selector: 'app-austria-page',
  templateUrl: './austria-page.component.html',
  styleUrls: ['./austria-page.component.css']
})
export class AustriaPageComponent implements OnInit {

  maps:any;
  constructor(private googleMap:MapService) { 
    this.maps = this.googleMap.onChoseLocation;
  }


  

  ngOnInit() {
  }

}
