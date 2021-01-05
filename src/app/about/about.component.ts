import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerin = false;
  triggerout = false;

  @HostListener("document:scroll")
  scrollDownFunction(){
    if (document.body.scrollTop > (document.body.clientHeight/1.9) || document.documentElement.scrollTop > (document.body.clientHeight/1.9)) {
      this.triggerin = true;
      this.triggerout = false;
    }
    else {
      this.triggerin = false;
      this.triggerout = true;
    }
  }
}
