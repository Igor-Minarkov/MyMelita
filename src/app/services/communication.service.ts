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
    let url = environment.baseURL + 'offers';
    return this.http.get(url).pipe(map((result: any) => result.offers));
  }

  getSubscriptions(id: number) {
    let url = environment.baseURL + `offers/${id}/subscriptions`;
    return this.http.get(url).pipe(map((result: any) => result.subscriptions));
  }
}
