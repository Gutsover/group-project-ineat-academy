import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user;
  @Output() userLogin = new EventEmitter<any>();
  @Output() userLogout = new EventEmitter<any>();
  isConnected = false;

  constructor() { }



  ngOnInit() {
  }

  onUserLogin(event) {
    console.log(event);
    this.userLogin.emit(event);
  }

  onUserLogout(event) {
    console.log('Header', event);
    this.userLogout.emit(event);
  }

}
