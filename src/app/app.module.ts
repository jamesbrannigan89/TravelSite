import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouritePlacesComponent } from './favourite-places/favourite-places.component';
import { from } from 'rxjs';
import { CountriesVisitedComponent } from './countries-visited/countries-visited.component';
import { ContactComponent } from './contact/contact.component';
import { AustriaPageComponent } from './austria-page/austria-page.component';
import {MapService} from './Services/googleMap.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    FavouritePlacesComponent,
    CountriesVisitedComponent,
    ContactComponent,
    AustriaPageComponent,
    
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
  providers: [MapService,
    {provide:'canLeavePage',
    useValue: checkStateOfContactPage
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkStateOfContactPage(component:ContactComponent){
 if(component.contactPageState) return window.confirm('You have not sent your email. Do you want to leave the page?')
 return true;
}