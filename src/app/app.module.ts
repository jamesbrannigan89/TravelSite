import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CountriesVistedComponent } from './countries-visted/countries-visted.component';
import { AustriaComponent } from './countries-visted/austria/austria.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutComponent,
    CountriesVistedComponent,
    AustriaComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
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

