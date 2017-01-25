import { Injectable, Inject } from '@angular/core';
import * as fb from 'firebase';
import { FirebaseApp, AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FirebaseService {

    // private ref: fb.database.Reference;
    // private storage: fb.storage.Reference;
    // private auth: fb.auth.Auth;
    // public firebaseTimeStamp = fb.database['ServerValue'].TIMESTAMP;

    constructor(private af: AngularFire) {

    }

    signup(email: string, password: string) {
        return this.af.auth.createUser({ 'email': email, 'password': password });
    }

    login(email: string, password: string) {
        return this.af.auth.login({ 'email': email, 'password': password })
    }

    saveExtraDetails(uid, detailsObject: Object) {
        console.log(detailsObject);
        return this.af.database.object(`users/${uid}`)
            .set(detailsObject);
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