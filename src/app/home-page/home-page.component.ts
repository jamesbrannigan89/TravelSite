import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
countries =[

{
  name:'Bosnia',
  pageUrl:'',
},

{
  name:'Switzerland',
  pageUrl:'',
},

{
  name:'Italy',
  pageUrl:'',
},
{
  name:'Croatia',
  pageUrl:'',
},

]

 
  
}
