import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
  constructor() { }

  ngOnInit() {

  }

}
