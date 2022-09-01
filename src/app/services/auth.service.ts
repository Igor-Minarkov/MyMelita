import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any = '';
  constructor(private router: Router, private http: HttpClient) {}

  loginInfo(obj: any) {
    let url = environment.baseURL + 'login';
    return this.http.post<any>(url, obj);
  }

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

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
