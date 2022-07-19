import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyA9I8K_x30wUKySQMShAuFPNJ7j695PSdg',
  authDomain: 'sticky-notes-7c83d.firebaseapp.com',
  projectId: 'sticky-notes-7c83d',
  storageBucket: 'sticky-notes-7c83d.appspot.com',
  messagingSenderId: '143891796037',
  appId: '1:143891796037:web:5405f2b54620c731c5932c'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
