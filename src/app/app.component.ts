import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portofolio';
  config: any;
  fullpage_api: any;
  
  constructor(){
    this.config = {
      anchors:[],
      menu: '#menu',
      navigation: false,
      autoScrolling: false,
      scrollOverflow: true,
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
