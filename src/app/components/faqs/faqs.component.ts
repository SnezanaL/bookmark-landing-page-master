
import { Component, OnInit } from '@angular/core';

import faqs from '../../../assets/faqs.json';
//console.log(faqs);
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  panelOpenState = false;
  Faqs: any = faqs;
  //Faqs1: any = [];
 
  constructor(
  ) { }

  ngOnInit() {
    //this.loadFaqs();
    //this.loadFaqs1();

  }


  // loadFaqs() {
  // this.faqsService.getFaqs().subscribe((data: {}) => {
  //   this.Faqs = data;
  //   console.log(data);
  // });
// }

//   loadFaqs1() {
//     this.faqsService.getFaqs1().subscribe((data: {}) => {
//       this.Faqs1 = data;
//       console.log(this.Faqs1);
//     });
// }

}
