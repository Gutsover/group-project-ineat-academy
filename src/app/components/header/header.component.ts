import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output()  userLogin = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onUserLogin(event) {
    this.userLogin.emit(event)
  }

}
