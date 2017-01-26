import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../../providers'
declare let firebase: any;

@Component({
  selector: 'root',
  template: require('./root.html'),
  styles: [require('./root.scss')],
  encapsulation: ViewEncapsulation.None
})
export class RootContainer {
  isLoggedIn: boolean = false;
  isStudent: boolean = false;
  isCompany: boolean = false;

  constructor(private fs: FirebaseService) { }

  ngOnInit() {
    this.fs.checkUserAuth()
      .subscribe(auth => {
        if (auth !== null) {
          this.isLoggedIn = true;
          this.fs.returnAccountType()
            .subscribe(data => {
              data.type === 0 ? this.isStudent = true : this.isCompany = true
            })
        }
      })
  }

}
