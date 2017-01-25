import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../../providers'
// import 'rxjs/add/operator/distinctUntilChnaged';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require("./home.scss")],
  encapsulation: ViewEncapsulation.None
})
export class HomeContainer {

  constructor(private fs: FirebaseService) {
  }

  ngOnInit() { }

  uploadResume(e) {
    this.fs.uploadResumeToFirebase(e)
      .then(success => console.log("uploaded resume successfully", success))
      .catch(err => console.log("an error occured" + err));
  }

}
