import { Component, OnInit } from '@angular/core';
import { ICountries } from './countries';



@Component({
  selector: 'app-countries-visted',
  templateUrl: './countries-visted.component.html',
  styleUrls: ['./countries-visted.component.css']
})
export class CountriesVistedComponent implements OnInit {

  constructor() {

    this.filteredCountries = this.countries;
    this.listFilter=''
   }

  _listFilert:string;
  get listFilter():string{
    return this._listFilert;
  }

  set listFilter(value:string){
    this._listFilert=value;
    this.filteredCountries= this.listFilter ? this.perfromFilter(this.listFilter) :this.countries;
  }
  

  filteredCountries:ICountries[];
  countries:ICountries[]=[
    {
      name:'Austria',
      image:'/assets/images/austria.jpg',
      description:"We visted Austria on three different occasions. We went to Hallstat,Salzburg,Vienna and Innsbruck ",
      pageUrl:'/austria-page'
      
    },
    {
      name:'Belgium',
      image:'/assets/images/belgium.jpg',
      description:"We visted Belgium in November and went to several different cities, but we were based in Antwerp.",
      pageUrl:'/austria-page'
      
    },
    {
      name:'Bosnia and Herzagonia ',
      image:'/assets/images/bosnia.jpg',
      description:"We visted Mostar and Sarajevo in September. We also did a day trip from Mostar to three different locations based around the city",
      pageUrl:'/austria-page'
    },
    {
      name:'Bulgaria',
      image:'/assets/images/bulgaria.jpg',
      description:"Bulgaria was our first stop. We arrived in Sofia on the firts of August.",
      pageUrl:'/austria-page'
      
    },
    {
      name:'Croatia',
      image:'/assets/images/croatia.jpg',
      description:"We arrived in croatia on the first of September.",
      pageUrl:'/austria-page'
      
    },
    {
      name:'France',
      image:'/assets/images/france.jpg',
      description:"H",
      pageUrl:'/austria-page'
      
    },

  ]

  perfromFilter(filterBy:string):ICountries[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((countries:ICountries)=>
      countries.name.toLocaleLowerCase().indexOf(filterBy) !==-1);
  
  }

  ngOnInit() {
  }

}
