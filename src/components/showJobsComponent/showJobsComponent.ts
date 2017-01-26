import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'show-jobs-component',
    template: require('./showJobsComponent.html'),
    styles: [require('./showJobsComponent.scss')]
})
export class showJobsComponent {
    // @Output() jobDesc = new EventEmitter;
    @Input() jobs;
    constructor() {
    }

    ngOnInit() {
        console.log('jobs', this.jobs);
    }

}
