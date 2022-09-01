import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offersData: any[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService
      .getOffers()
      .subscribe(
        (result) => ((this.offersData = result), console.log(this.offersData))
      );
  }

  logout() {
    this.authService.logout();
  }
}
