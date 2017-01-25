import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';


declare let google: any;

declare let firebase: any;


@Component({
  selector: 'root',
  template: require('./root.html'),
  styles: [require('./root.scss')],
  encapsulation: ViewEncapsulation.None
})
export class RootContainer implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

}
