import { AuthProviders, AuthMethods } from 'angularfire2';

export class AppConfig {
    config: {
        apiPDF: string,
        apiBaseUrl: string,
        firebaseConfig: { apiKey: string, authDomain: string, databaseURL: string, storageBucket: string },
        firebaseAuthConfig: { provider: any, method: any };
    };

    constructor(env: string = 'dev') {
        if (env === 'dev') {
            this.config = {
                'apiPDF': 'https://polar-falls-53557.herokuapp.com/api',
                'apiBaseUrl': "https://htzis68yf2.execute-api.us-east-1.amazonaws.com/dev", //  'apiBaseUrl': 'https://o244tfx6eh.execute-api.us-east-1.amazonaws.com/dev',
                'firebaseConfig': {
                    apiKey: "AIzaSyCSKyKkZ5ClJZffskObPM3Auda1vrTR8g8",
                    authDomain: "luminous-torch-4640.firebaseapp.com",
                    databaseURL: "https://luminous-torch-4640.firebaseio.com",
                    storageBucket: "luminous-torch-4640.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        } else {
            this.config = {
                'apiPDF': 'https://polar-falls-53557.herokuapp.com/api',
                'apiBaseUrl': 'https://fl3l0d8034.execute-api.us-east-1.amazonaws.com/prod',
                'firebaseConfig': {
                    apiKey: "AIzaSyCSKyKkZ5ClJZffskObPM3Auda1vrTR8g8",
                    authDomain: "luminous-torch-4640.firebaseapp.com",
                    databaseURL: "https://luminous-torch-4640.firebaseio.com",
                    storageBucket: "luminous-torch-4640.appspot.com"
                },
                firebaseAuthConfig: { provider: AuthProviders.Password, method: AuthMethods.Password }
            };
        }
    }
}

export let appConfig = new AppConfig('dev');
