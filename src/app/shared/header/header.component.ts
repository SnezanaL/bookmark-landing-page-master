import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  navbarOpen = false;
  toggle = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit() {
  }

  
}
