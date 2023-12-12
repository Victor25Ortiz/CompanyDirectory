import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAcFf2oMoVzarCwoECXeE9rw4HPx3uL6_I",
  authDomain: "company-directory-6225a.firebaseapp.com",
  projectId: "company-directory-6225a",
  storageBucket: "company-directory-6225a.appspot.com",
  messagingSenderId: "366180371324",
  appId: "1:366180371324:web:f8eafa014a87c8241172f9"
};

export const firebaseApp = initializeApp(firebaseConfig)