import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
gotomenu(){
  document.getElementById('menu').scrollIntoView();
}
  gotocontact(){
    document.getElementById('contact').scrollIntoView();
  }

}
