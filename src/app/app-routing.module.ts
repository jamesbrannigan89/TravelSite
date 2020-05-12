import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {AboutComponent} from './about/about.component'
import {CountriesVistedComponent} from './countries-visted/countries-visted.component'
import { AustriaComponent } from './countries-visted/austria/austria.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about', component:AboutComponent},
  {path:'countriesVisted',component:CountriesVistedComponent},
      {path:'austria-page',component: AustriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
