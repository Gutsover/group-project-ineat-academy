import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  image$: Observable<any>;
  comments$: Observable<any[]>;
  imageId: string;

  constructor(private dataService: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.paramMap.get('imageId');
    this.image$ = this.dataService.getPictureById(this.imageId);
    this.comments$ = this.dataService.getCommentsByPictureId(this.imageId);
  }

}
