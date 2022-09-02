import { CommunicationService } from './../../services/communication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  loading: boolean = false;
  data: any[] = [];
  constructor(
    private communicationService: CommunicationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    let id = this.route.snapshot.params['id'];
    this.communicationService.getSubscriptions(id).subscribe(
      (result) => ((this.data = result), (this.loading = false)),
      (error) => {
        console.log(error);
      }
    );
  }
}
