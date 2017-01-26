import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import * as fb from 'firebase';
import { FirebaseApp, AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';
import "rxjs/add/operator/take";


@Injectable()
export class FirebaseService {
    uuid: string;
    accountType: string;
    // private ref: fb.database.Reference;
    // private storage: fb.storage.Reference;
    // private auth: fb.auth.Auth;
    // public firebaseTimeStamp = fb.database['ServerValue'].TIMESTAMP;

    constructor(private af: AngularFire) {
        this.checkUserAuth()
            .subscribe(auth => {
                // console.log(auth.uid + " subsssssssssssssssss");
                if (auth !== null) { this.uuid = auth.uid };
            });
    };


    checkUserAuth() {
        return this.af.auth;
    }

    returnAccountType() {
        return this.af.database
            .object(`users/${this.uuid}`)
            .take(1)
    };

    saveJobDetail(jobObj: Object) {
        jobObj['postedOn'] = firebase.database['ServerValue'].TIMESTAMP;
        jobObj['uid'] = this.uuid;

        let pushKey = firebase.database().ref().push();

        let obj = {};

        obj['jobsByCompanies/' + this.uuid + '/' + pushKey.key] = jobObj;
        obj['allJobs/' + pushKey.key] = jobObj;

        return firebase.database().ref().update(obj)
        // return this.af.database.list(`jobs/${this.uuid}`).push(jobObj);
    }

    logOutUser() {
        return Promise.resolve(this.af.auth.logout());
    }

    signup(email: string, password: string) {
        return this.af.auth.createUser({ 'email': email, 'password': password });
    };

    applyForJob(companyUid: string, postUid) {
        console.log(companyUid, postUid)

        let obj = {};
        let userObj = { "uuid": this.uuid };

        obj['jobsByCompanies/' + companyUid + '/' + postUid + "/appliedCandidates"] = userObj;
        obj['allJobs/' + postUid + "/appliedCandidates"] = userObj;

        return firebase.database().ref().update(obj);
    }

    login(email: string, password: string) {
        return this.af.auth.login({ 'email': email, 'password': password })
    };

    saveExtraDetails(uid, detailsObject: Object) {
        console.log(detailsObject);
        return this.af.database.object(`users/${uid}`)
            .set(detailsObject);
    };

    uploadResumeToFirebase(resumeObj: Object) {
        resumeObj['status'] = true;
        return this.af.database.object(`users/${this.uuid}`)
            .update(resumeObj);
    };

    getAllJobs() {
        return this.af.database.list(`allJobs/`);
    }

    // saveMultipath(multipath) {
    //     return this.ref.update(multipath);
    // } // saveMultipath

    // getPushRef(path) {
    //     return this.ref.child(path).push();
    // }

    // uploadImageOnStorageBase64(path, image: string): Promise<string> {
    //     return new Promise(res => {
    //         this.storage.child(path).putString(image, 'base64')
    //             .then((snapshot) => {
    //                 console.log('Uploaded a base64 string!');
    //                 // The promise will resolve with a Download URL provided by Firebase Storage
    //                 res(snapshot.downloadURL);
    //             });
    //     });
    // }

    // uploadImageOnStorageBlob(path, blob): Promise<string> {
    //     return new Promise(res => {
    //         this.storage.child(path).put(blob).then((snapshot) => {
    //             console.log('Uploaded a blob or file!');
    //             // The promise will resolve with a Download URL provided by Firebase Storage
    //             res(snapshot.downloadURL);
    //         })
    //     });
    // }

}

// export const firebase = new FirebaseService();