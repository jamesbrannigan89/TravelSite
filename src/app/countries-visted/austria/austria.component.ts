import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-austria',
  templateUrl: './austria.component.html',
  styleUrls: ['./austria.component.css']
})
export class AustriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countries=[
    {
      image:'/assets/images/austria.jpg',
    }

  ]
   
}
