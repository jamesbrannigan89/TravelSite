import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-countries-visited',
  templateUrl: './countries-visited.component.html',
  styleUrls: ['./countries-visited.component.css']
})
export class CountriesVisitedComponent implements OnInit {

  
  

    countries =[
      {
        country:'Austria',
        description:'We visited Austria three different times throught our trip and went to three different cities. Click below to see more photos of Austria.',
        imageUrl:"/assets/img/austria.jpg",
        pageUrl:'/austria-page'

      },

      {
        
        country:'Belgium',
        description:'Visted 3 different cities ',
        imageUrl:"/assets/img/belgium.jpg"
      },

      {
        country:'Bulgaria',
        description:'We began our trip on Bulgaria',
        imageUrl:"/assets/img/bulgaria.jpg"
      },

      {
        country:'Croatia',
        description:'Arrived in september',
        imageUrl:"/assets/img/croatia.jpg"

      }
      
    ]

  

  constructor() { }

  ngOnInit() {
  }

}
