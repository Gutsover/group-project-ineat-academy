import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Picture {

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private imageCollection: AngularFirestoreCollection<any>;

  images: Observable<any[]>;

  // images = [
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg', alt: 'A Toyota Previa covered in graffiti'},
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg', alt: 'Interesting living room light'},
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg', alt: 'Sara on a red bike'},
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg', alt: 'XOXO venue in between talks'},
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg', alt: 'Trees lit by green light'},
  //   { src: 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg', alt: 'Portrait of Justin Pervorse'},
  // ];

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.imageCollection = this.db.collection<any>('pictures');
    this.images = this.imageCollection.valueChanges();
    // this.images.subscribe((data) => {console.log(data)});
  }
}
