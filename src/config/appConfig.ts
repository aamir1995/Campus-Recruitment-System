import { AuthProviders, AuthMethods } from 'angularfire2';

export class AppConfig {
    config: {
        firebaseConfig: { apiKey: string, authDomain: string, databaseURL: string, storageBucket: string },
        firebaseAuthConfig: { provider: any, method: any };
    };

    constructor(env: string = 'dev') {
        if (env === 'dev') {
            this.config = {
                'firebaseConfig': {
                    apiKey: "AIzaSyDuLTn9XJ44Zb0wBWCV4v97Ds4eBtNdZQ8",
                    authDomain: "campus-recruitment-syste-25299.firebaseapp.com",
                    databaseURL: "https://campus-recruitment-syste-25299.firebaseio.com",
                    storageBucket: "campus-recruitment-syste-25299.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        } else {
            this.config = {
                'firebaseConfig': {
                    apiKey: "AIzaSyDuLTn9XJ44Zb0wBWCV4v97Ds4eBtNdZQ8",
                    authDomain: "campus-recruitment-syste-25299.firebaseapp.com",
                    databaseURL: "https://campus-recruitment-syste-25299.firebaseio.com",
                    storageBucket: "campus-recruitment-syste-25299.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        }
    }
}

export let appConfig = new AppConfig('dev');
