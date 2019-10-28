import { Injectable } from '@angular/core';
import faqs from '../../assets/faq.json';
import { Faqs } from '../models/faqs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import faqs1 from '../../assets/faqs1.json';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  Faqs: any = faqs;
  Faqs1: any = faqs1;

  url = 'http://localhost:4000';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

getFaqs(): Observable<Faqs> {
return this.http.get<Faqs>(this.url + '/faqs/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
}
getFaqs1() {
  return this.http.get('../../assets/faqs1.json')
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  );
}
  constructor(
    private http: HttpClient
  ) { }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
