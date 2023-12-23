import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Body, ResponseMail } from '../interfaces/mail.interface';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private baseUrl = environment.FORMSPRESS_URL;

  constructor( private http: HttpClient ) { }

  sendMail( body: Body ): Observable<ResponseMail>{
    return this.http.post<ResponseMail>(this.baseUrl, body)
      .pipe(
        catchError( err => of(err))
      )
  }

}
