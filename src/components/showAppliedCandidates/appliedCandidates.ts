import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'show-applied-candidates',
    template: require('./appliedCandidates.html'),
    styles: [require('./appliedCandidates.scss')]
})
export class showAppliedComponent {
    // @Output() applyForJob = new EventEmitter;
    @Output() allCandidates = new EventEmitter;
    @Input() myJobs;
    constructor() {
    }

    ngOnInit() {
    }

    parseObj(obj) {
        return Object.keys(obj).length;
    }

    viewAllCandidates(postUid) {
        console.log("emiiiiiiii")
        this.allCandidates.emit(postUid);
    }

}
