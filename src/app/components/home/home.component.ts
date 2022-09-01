import { CommunicationService } from './../../services/communication.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offersData: any[] = [];
  constructor(
    private communicationService: CommunicationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.communicationService
      .getOffers()
      .subscribe((result) => (this.offersData = result));
  }

  onSelect(id: any) {
    this.router.navigate(['/home', id.id]);
  }

  logout() {
    this.authService.logout();
  }
}
