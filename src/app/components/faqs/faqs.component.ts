import { FaqsService } from './../../services/faqs.service';
import { Component, OnInit } from '@angular/core';

import faqs1 from '../../../assets/faqs1.json';
//console.log(faqs1);
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  panelOpenState = false;
  Faqs: any = [];
  Faqs1: any = [];
 
  constructor(
    public faqsService: FaqsService
  ) { }

  ngOnInit() {
    this.loadFaqs();
    this.loadFaqs1();

  }


  loadFaqs() {
  this.faqsService.getFaqs().subscribe((data: {}) => {
    this.Faqs = data;
    console.log(data);
  });
}

  loadFaqs1() {
    this.faqsService.getFaqs1().subscribe((data: {}) => {
      this.Faqs1 = data;
      console.log(this.Faqs1);
    });
}

}
