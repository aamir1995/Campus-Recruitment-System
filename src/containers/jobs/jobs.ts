import { Component, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../../providers'

@Component({
    selector: 'jobs',
    template: require('./jobs.html'),
    styles: [require('./jobs.scss')],
    encapsulation: ViewEncapsulation.None
})
export class JobsContainer {

    constructor(private fs: FirebaseService) { }

    ngOnInit() { }

    postJob(e) {
        this.fs.saveJobDetail(e)
            .then(() => console.log("job posted Successfully"))
            .catch(err => console.log(err + "an error occured"));
    }
}
