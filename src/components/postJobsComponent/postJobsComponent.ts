import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'post-jobs-component',
    template: require('./postJobsComponent.html'),
    styles: [require("./postJobsComponent.scss")]
})
export class PostJobsComponent {
    @Output() jobDesc = new EventEmitter;

    postJobForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.postJobForm = fb.group({
            'jobTitle': '',
            'vacancies': '',
            'description': '',
            'department': '',
            'category': '',
            'careerLevel': '',
            'salary': '',
            'jobType': ''
        });
    }

    ngOnInit() { }

    // Again we’ll implement our form submit function that will just console.log the results of our form
    submitForm(value: any): void {
        console.log(value);
        this.jobDesc.emit(value);
    }

}
