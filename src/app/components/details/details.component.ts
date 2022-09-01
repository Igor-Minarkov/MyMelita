import { CommunicationService } from './../../services/communication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: any[] = [];
  constructor(
    private communicationService: CommunicationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.communicationService
      .getSubscriptions(id)
      .subscribe((result) => (this.data = result));
  }
}
