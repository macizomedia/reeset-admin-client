import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCpyfdx8JyF2QR-3SqgitRUz6dxoWZEKIk',
  authDomain: 'appvue.firebaseapp.com',
  databaseURL: 'https://appvue.firebaseio.com',
  projectId: 'appvue',
  storageBucket: 'appvue.appspot.com',
  messagingSenderId: '301629589704',
  appId: '1:301629589704:web:7abb71149edc35c3a77dfd',
  measurementId: 'G-0NL67NBYB6'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
