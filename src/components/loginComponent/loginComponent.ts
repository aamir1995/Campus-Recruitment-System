import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'login-component',
    template: require('./loginComponent.html'),
    styles: [require("./loginComponent.scss")],
})
export class LoginComponent {
    @Output() loginDetails = new EventEmitter;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        // Here we are using the FormBuilder to build out our form.
        this.loginForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'email': '',
            'password': ''
        })
    }

    ngOnInit() { }

    // Again we’ll implement our form submit function that will just console.log the results of our form
    submitForm(value: any): void {
        console.log(value);
        this.loginDetails.emit(value);
    }

}
