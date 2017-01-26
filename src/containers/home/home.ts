import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  isStudent: boolean = false;
  isCompany: boolean = false;
  allJobs$: Observable<any>;
  specificJobs$: Observable<any>;

  uuid: string;

  constructor(private fs: FirebaseService, private router: Router) {
  }

  ngOnInit() {
    this.fs.checkUserAuth()
      .take(1)
      .subscribe(auth => this.uuid = auth.uid);


    this.fs.returnAccountType()
      .subscribe(data => {
        if (data.type == 0) { this.isStudent = true } else {
          this.isCompany = true
        }
        this.specificJobs$ = this.fs.getSpecificCompanyJobs(this.uuid);
      });
    this.fs.returnAccountType();
    this.allJobs$ = this.fs.getAllJobs();



  }

  apply(e) {
    console.log("from event", e);

    this.fs.applyForJob(e.companyUid, e.jobUid)
    // .then(() => console.log("applied successfully"))
    // .catch(err => console.log(err + "an error occured"));
  }

  viewAllCandidates(e) {
    this.router.navigate(['appliedCandidates', e]);
  }

}
