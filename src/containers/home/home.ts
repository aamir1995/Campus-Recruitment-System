import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../../providers'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require("./home.scss")],
  encapsulation: ViewEncapsulation.None
})
export class HomeContainer {
  allJobs$: Observable<any>;

  constructor(private fs: FirebaseService) {
  }

  ngOnInit() {
    this.fs.returnAccountType();
    this.allJobs$ = this.fs.getAllJobs()
    // .map(val => console.info(val));
  }

}
