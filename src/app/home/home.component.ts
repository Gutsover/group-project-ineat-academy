import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  images$: Observable<any[]>;
  constructor(private dataService: DatabaseService) { }
 
 
  ngOnInit() {
    this.images$ = this.dataService.getPopularPictures();
    console.log(this.images$);
  }
  /*
   private imageCollection: AngularFirestoreCollection<any>;
   
   
   
   ngOnInit() {
     this.imageCollection = this.db.collection<any>('pictures');
     this.images = this.imageCollection.valueChanges();
    //  this.images.subscribe((data) => {console.log(data)});
  }
   */
}
