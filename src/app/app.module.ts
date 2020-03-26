import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CountriesVistedComponent } from './countries-visted/countries-visted.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutComponent,
    CountriesVistedComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
     //google maps key
      apiKey:'AIzaSyD_iXwqNPhIVeqwjcAQ1puSXvClbPg6ciQ'

    })
  ],
  providers: [
 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

