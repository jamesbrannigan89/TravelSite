import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-places',
  templateUrl: './favourite-places.component.html',
  styleUrls: ['./favourite-places.component.css']
})
export class FavouritePlacesComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
  }

  favourites=[{
    country:'Italy',
    description:'We visited Rome in August',
    imageUrl:"/assets/img/rome.JPG"
  },

  {
    contry:'France',
    description:'Point du hoc',
    imageUrl:"/assets/img/pointDu.jpg"
  },

  {
    contry:'Mostar',
    description:'Mostar',
    imageUrl:"/assets/img/mostar.JPG" 
  },
  


   
  ]
}
