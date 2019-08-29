import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJ0E1O8OsHYpbgp4xSQtSoaXLcSv6-n00",
    authDomain: "appforrecipes.firebaseapp.com",
    databaseURL: "https://appforrecipes.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
