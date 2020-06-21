import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }
gotomenu(){
  document.getElementById('menu').scrollIntoView();
}
  gotocontact(){
    document.getElementById('contact').scrollIntoView();
  }
  goorderonline() {
    window.open('https://canberra.easi.com.au/en/easiCanberra.html', '_blank');
}
}
