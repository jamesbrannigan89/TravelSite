import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-countries-visited',
  templateUrl: './countries-visited.component.html',
  styleUrls: ['./countries-visited.component.css']
})
export class CountriesVisitedComponent implements OnInit {

  
  

    countries =[
      {
      //  image:'src="/assets/img/austria.jpg"',
        country:'Austria',
        description:'We visited Austria three different times throught our trip and went to three different cities. Click below to see more photos of Austria.',
        imageUrl:"/assets/img/austria.jpg"
      },

      {
        id:2,
        country:'Belgium',
        description:'test',
        imageUrl:"/assets/img/belgium.jpg"
      }
      
    ]

  

  constructor() { }

  ngOnInit() {
  }

}
