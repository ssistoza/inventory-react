import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5h6REWRkHxO24Zl69RMDaNDbeVsjafxo",
    authDomain: "catch-of-the-day-ssistoza.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ssistoza.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// Nameed export.
export { firebaseApp };

// default export.
export default base;