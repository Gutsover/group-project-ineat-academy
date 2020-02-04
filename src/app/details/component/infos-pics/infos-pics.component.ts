import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infos-pics',
  templateUrl: './infos-pics.component.html',
  styleUrls: ['./infos-pics.component.scss']
})

export class InfosPicsComponent {

  @Input() picture;

  constructor() { }
}
