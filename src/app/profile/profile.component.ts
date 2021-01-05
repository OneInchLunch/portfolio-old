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
    if (document.body.scrollTop > (document.body.clientHeight/6) || document.documentElement.scrollTop > (document.body.clientHeight/6)) {
      this.triggerin = true;
      this.triggerout = false;
    }
    else {
      this.triggerin = false;
      this.triggerout = true;
    }
  }
}