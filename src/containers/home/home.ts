import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import 'rxjs/add/operator/distinctUntilChnaged';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require("./home.scss")],
  encapsulation: ViewEncapsulation.None
})
export class HomeContainer {

  constructor() {
  }

  ngOnInit() { }

}
