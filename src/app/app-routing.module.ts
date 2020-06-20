import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {ApiKeyComponent} from './api-key/api-key.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'google-map', component: ApiKeyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    FormsModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
