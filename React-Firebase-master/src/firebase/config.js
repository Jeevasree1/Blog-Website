import {initializeApp} from 'firebase/app'
import{getAuth} from 'firebase/auth'
import{
    getFirestore
}from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAxaH_lTkPGLmJQYc_wDWm-xd_Dl3LVtJA",
    authDomain: "blog-b68d0.firebaseapp.com",
    projectId: "blog-b68d0",
    storageBucket: "blog-b68d0.appspot.com",
    messagingSenderId: "833496798157",
    appId: "1:833496798157:web:60e53cb71008d4660d6a84"
  };
  initializeApp(firebaseConfig)
  const db=getFirestore()
  const auth=getAuth()
  export {db,auth}
