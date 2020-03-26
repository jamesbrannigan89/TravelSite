import { Component, OnInit } from '@angular/core';
import { ICountries } from './countries';



@Component({
  selector: 'app-countries-visted',
  templateUrl: './countries-visted.component.html',
  styleUrls: ['./countries-visted.component.css']
})
export class CountriesVistedComponent implements OnInit {

  constructor() { }


  countries:ICountries[]=[
    {
      name:'Austria',
      image:'/assets/images/austria.jpg',
      description:"H"
      
    },
    {
      name:'Belgium',
      image:'/assets/images/belgium.jpg',
      description:"H"
      
    },
    {
      name:'Bosnia and Herzagonia ',
      image:'/assets/images/bosnia.jpg',
      description:"H"
      
    },

   

   

   
    
  ]

  

 

  



  ngOnInit() {
  }

}
