import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'signup',
    template: require('./signup.html'),
    styles: [require("./signup.scss")]
})
export class SignupContainer {

    uId$: BehaviorSubject<string>;
    emailRegx: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(private router: Router) { }

}
