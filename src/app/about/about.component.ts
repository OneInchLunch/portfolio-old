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
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      this.triggerin = true;
      this.triggerout = false;
    }
    else {
      this.triggerin = false;
      this.triggerout = true;
    }
  }
}
