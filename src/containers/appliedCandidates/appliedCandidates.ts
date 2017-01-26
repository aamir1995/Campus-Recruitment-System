import { FirebaseService } from '../../providers'
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { }

@Component({
    selector: 'home',
    template: require('./appliedCandidates.html'),
    styles: [require("./appliedCandidates.scss")],
    encapsulation: ViewEncapsulation.None
})
export class CandidatesContainer {
    isStudent: boolean = false;
    isCompany: boolean = false;
    data: any;
    // uuid: string;
    // allCands$;

    constructor(private fs: FirebaseService, private router: ActivatedRoute) {
    }

    keys(object: {}) {
        return object ? Object.keys(object) : [];
    }


    ngOnInit() {
        this.router.params.subscribe((params: any) => {
            console.info(params);
            this.fs.getAllCandidates(params.id)
                .subscribe(data => this.data = data.appliedCandidates);
            // .subscribe(cands => console.log("alll cands", cands));
        });
        // this.fs.checkUserAuth()
        //     .take(1)
        //     .subscribe(auth => this.uuid = auth.uid);

        //     this
    }

}
