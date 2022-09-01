import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor(private http: HttpClient) {}

  getOffers() {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const requestOptions = { headers: headers };
    let url = environment.baseURL + 'offers';
    return this.http
      .get(url, requestOptions)
      .pipe(map((result: any) => result.offers));
  }

  getSubscriptions(id: number) {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const requestOptions = { headers: headers };
    let url = environment.baseURL + `offers/${id}/subscriptions`;
    return this.http
      .get(url, requestOptions)
      .pipe(map((result: any) => result.subscriptions));
  }
}
