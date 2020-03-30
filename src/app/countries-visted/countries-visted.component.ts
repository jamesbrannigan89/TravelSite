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
      description:"We visted Austria on three different occasions. We went to Hallstat,Salzburg,Vienna and Innsbruck "
      
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
    {
      name:'Bulgaria',
      image:'/assets/images/bosnia.jpg',
      description:"H"
      
    },
    {
      name:'Croatia',
      image:'/assets/images/bosnia.jpg',
      description:"H"
      
    },
    {
      name:'France',
      image:'/assets/images/bosnia.jpg',
      description:"H"
      
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
