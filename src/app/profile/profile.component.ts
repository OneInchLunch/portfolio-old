import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerin = false;
  triggerout = false;

  @HostListener("document:scroll")
  scrollDownFunction(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.triggerin = true;
      this.triggerout = false;
    }
    else {
      this.triggerin = false;
      this.triggerout = true;
    }
  }
}