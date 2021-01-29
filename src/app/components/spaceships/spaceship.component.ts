import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from '../../services/spaceship.service';
import { Spaceship } from '../../models/spaceship.model';
import { SearchResponse } from '../../models/search-response.model';
import { SearchRequest } from 'src/app/models/search-request.model';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {

  spaceshipPage = new SearchResponse<Spaceship>();
  loading = false;
  constructor(private spaceshipService: SpaceshipService) { }

  ngOnInit(): void {
    this.loading = true;
    const request = new SearchRequest<Spaceship>();
    this.spaceshipService.search(request).subscribe((response: SearchResponse<Spaceship>) => {
      this.spaceshipPage  = response;
      this.loading = false;
    });
  }

}
