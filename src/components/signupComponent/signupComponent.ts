import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'signup-component',
    template: require('./signupComponent.html'),
    styles: [require("./signupComponent.scss")],
})
export class SignupComponent {
    @Output() details = new EventEmitter;

    studentAccountForm: FormGroup;
    companyAccountForm: FormGroup;
    emailRegx: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(private fb: FormBuilder) {
        this.studentAccountForm = fb.group({
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': '',
            'type': 0,
            'status': false
        });

        this.companyAccountForm = fb.group({
            'companyName': '',
            'email': '',
            'password': '',
            'type': 1
        });
    }

    ngOnInit() { }

    // Again we’ll implement our form submit function that will just console.log the results of our form
    submitForm(value: any): void {
        console.log(value);
        this.details.emit(value);
    }

}
