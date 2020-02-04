import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments: any;
  commentsArray;


  constructor(private route: ActivatedRoute, private service: DatabaseService) { }

  ngOnInit() {}

  ngOnChanges(): void {
    this.commentsArray = this.comments ? this.comments[0].comments : [];
  }

}
