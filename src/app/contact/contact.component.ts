import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

contactPageState:boolean = true;


  constructor(private router:Router) { }

  cancel(){
    this.router.navigate([''])
  }

 

}
