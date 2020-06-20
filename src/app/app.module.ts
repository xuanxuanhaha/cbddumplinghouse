import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ApiKeyComponent } from './api-key/api-key.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ApiKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJuv7kVpLCbfAM3zHX0ctF4w_dOJ88Mo0'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
