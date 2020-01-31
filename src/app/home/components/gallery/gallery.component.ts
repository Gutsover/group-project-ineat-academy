import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit, OnChanges {

  @Input() images;

  constructor() { }

  ngOnInit() {
    // console.log(this.images);
  }

  ngOnChanges(){
    // console.log(this.images);
  }

}
