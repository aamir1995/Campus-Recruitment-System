import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from '../../providers'

@Component({
    selector: 'signup',
    template: require('./signup.html'),
    styles: [require("./signup.scss")]
})
export class SignupContainer {

    uId$: BehaviorSubject<string>;

    constructor(private router: Router, private fs: FirebaseService) { }

    createAccount(e) {
        this.fs.signup(e.email, e.password)
            .then(auth => {
                let extraDetails = { firstName: e.firstName, lastName: e.lastName, type: e.type }
                this.fs.saveExtraDetails(auth.uid, extraDetails)
                    .then(() => this.router.navigate(['home']));
            })
            .catch(err => console.log(err + "An error occured"));
    }

}
