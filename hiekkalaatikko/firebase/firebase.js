
import * as firebase from 'hiekkalaatikko/firebase/firebase';
import { devConfig } from './config';

!firebase.apps.length && firebase.initializeApp(devConfig);

const auth = firebase.auth();

export {
  auth
}
