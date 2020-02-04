import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
