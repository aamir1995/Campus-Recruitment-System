import { Component, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../../providers'

@Component({
    selector: 'resume',
    template: require('./resume.html'),
    styles: [require('./resume.scss')],
    encapsulation: ViewEncapsulation.None
})
export class ResumeContainer {

    constructor(private fs: FirebaseService) { }

    ngOnInit() { }

    uploadResume(e) {
        this.fs.uploadResumeToFirebase(e)
            .then(success => console.log("uploaded resume successfully", success))
            .catch(err => console.log("an error occured" + err));
    }

}
