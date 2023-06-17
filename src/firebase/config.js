import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB2Q-qB-3YWVnpvsjOTAecElMWLNZUr4PA',
  authDomain: 'gallery-4cd28.firebaseapp.com',
  projectId: 'gallery-4cd28',
  storageBucket: 'gallery-4cd28.appspot.com',
  messagingSenderId: '399579135560',
  appId: '1:399579135560:web:6afc01aa2e3b3683ff627d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
