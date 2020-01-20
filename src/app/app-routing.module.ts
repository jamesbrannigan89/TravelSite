import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouritePlacesComponent } from './favourite-places/favourite-places.component';


const routes: Routes = [
 {path:'',
 component:HomePageComponent
 },

 {

  path:'favourite-place',
  component:FavouritePlacesComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
