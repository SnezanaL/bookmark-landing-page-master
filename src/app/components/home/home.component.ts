import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;


  constructor() { }

  ngOnInit() {
  }


}
