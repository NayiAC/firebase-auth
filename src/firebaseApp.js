// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0jMw6iUz7_WUhU8poLFNv6VbHG20LSvg',
  authDomain: 'desafio-auth-1c974.firebaseapp.com',
  projectId: 'desafio-auth-1c974',
  storageBucket: 'desafio-auth-1c974.appspot.com',
  messagingSenderId: '361312445183',
  appId: '1:361312445183:web:58f5ca8f390417cda822ca'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $auth = getAuth(app)

export { $auth }
