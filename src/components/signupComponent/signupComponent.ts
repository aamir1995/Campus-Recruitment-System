import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'signup-component',
    template: require('./signupComponent.html'),
    styles: [require("./signupComponent.scss")],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent {

    constructor() {
    }

    ngOnInit() { }

}
