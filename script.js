import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'

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

//Declaration of variables
const addBox = document.querySelector('.add-box'),
  modalBox = document.querySelector('.modal-box'),
  closeIcon = modalBox.querySelector(' header i'),
  titleTag = modalBox.querySelector(' input '),
  descTag = modalBox.querySelector(' textarea'),
  addBtn = modalBox.querySelector('button')

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
]

//Events list
addBox.addEventListener('click', () => {
  modalBox.classList.add('show')
})

closeIcon.addEventListener('click', () => {
  modalBox.classList.remove('show')
})

addBtn.addEventListener('click', e => {
  e.preventDefault()
  let noteTitle = titleTag.value,
    noteDesc = descTag.value

  if (noteTitle || noteDesc) {
    // async function setNotes() {
    //   var ref = collection(db, 'notes')

    //   const docRef = await addDoc(ref, {
    //     title: noteTitle,
    //     description: noteDesc
    //   })
    //     .then(() => {
    //       alert('Nota Adicionada!')
    //     })
    //     .catch(error => {
    //       alert('Error: ' + error)
    //     })
    // }

    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDate(),
      year = dateObj.getFullYear()

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${day} de ${month}, ${year}`
    }

    const notes = []
    notes.push(noteInfo)
    localStorage.setItem('notes', JSON.stringify(notes))
    modalBox.classList.remove('show')
  }
})
