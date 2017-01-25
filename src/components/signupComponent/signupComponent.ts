import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'signup-component',
    template: require('./signupComponent.html'),
    styles: [require("./signupComponent.scss")],
})
export class SignupComponent {
    @Output() details = new EventEmitter;
    accountForm: FormGroup;
    emailRegx: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(private fb: FormBuilder) {
        // Here we are using the FormBuilder to build out our form.
        this.accountForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': '',
            'type': ''
        })
    }

    ngOnInit() { }

    // Again we’ll implement our form submit function that will just console.log the results of our form
    submitForm(value: any): void {
        console.log(value);
        this.details.emit(value);
    }

}
