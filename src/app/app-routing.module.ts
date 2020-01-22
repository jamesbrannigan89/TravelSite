import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouritePlacesComponent } from './favourite-places/favourite-places.component';
import { CountriesVisitedComponent } from './countries-visited/countries-visited.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },

  {
    path:'favourite-places',
    component:FavouritePlacesComponent
  },

  {
    path:'countries-visited',
    component:CountriesVisitedComponent
  },

  {
    path:'contact',
    component:ContactComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
