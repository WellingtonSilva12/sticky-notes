//Declaration of variables
const addBox = document.querySelector('.add-box'),
  modalBox = document.querySelector('.modal-box'),
  modalTitle = modalBox.querySelector('header p'),
  closeIcon = modalBox.querySelector(' header i'),
  titleTag = modalBox.querySelector(' input '),
  descTag = modalBox.querySelector(' textarea'),
  addBtn = modalBox.querySelector('button'),
  noteBox = modalBox.querySelector('.note')

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

const colors = [
  '#E5BEDD',
  '#FFA8B8',
  '#DCD9F8',
  '#F7D8C3',
  '#FFC8C3',
  '#BCCEF4',
  '#B5DCF9',
  '#A9E5E3',
  '#A2EDCE',
  '#A0D995',
  '#C5D084',
  '#D2C897',
  '#FAE187',
  '#E8BA86',
  '#D3BEAD'
]

// getting notes in localstorage
const notes = JSON.parse(localStorage.getItem('notes') || '[]')

let color = randomColor()

let isUpdate = false,
  updateId

//Events list
addBox.addEventListener('click', () => {
  titleTag.focus()
  modalBox.classList.add('show')
})

closeIcon.addEventListener('click', () => {
  isUpdate = false
  titleTag.value = ''
  descTag.value = ''
  addBtn.innerText = 'Adicionar Nota'
  modalTitle.innerText = 'Nova Nota '
  modalBox.classList.remove('show')
  showNotes()
})

// function colors
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// functions notes
function showNotes() {
  document.querySelectorAll('.note').forEach(note => note.remove())

  notes.forEach((note, index) => {
    let liTag = ` <li class="note"              style="background-color: ${randomColor()} ">
                    <div class="details">
                    <p>${note.title}</p>
                    <span
                      > ${note.description}</span>
                    </div>
                    <div class="bottom-content">
                      <span>${note.date}</span>
                      <div class="setings">
                        <i onclick="showMenu(this)" class="bx bx-customize"></i>
                        <ul class="menu">
                          <li onclick="updateNote(${index}, '${note.title}', '${
      note.description
    }')"><i class='bx bx-edit'></i>Edit</li>
                          <li onclick="deleteNote(${index})"><i class='bx bx-trash'></i>Delete</li>
                        </ul>
                      </div>
                    </div>
                  </li>`
    addBox.insertAdjacentHTML('afterend', liTag)
  })
  console.log(randomColor())
}

showNotes()

function showMenu(elem) {
  elem.parentElement.classList.add('show')
  document.addEventListener('click', e => {
    if (e.target.tagName != 'I' || e.target != elem)
      elem.parentElement.classList.remove('show')
  })
}

function deleteNote(noteId) {
  let confirmDel = confirm('Você tem certeza que quer deletar está nota?')
  if (!confirmDel) return
  notes.splice(noteId, 1)
  localStorage.setItem('notes', JSON.stringify(notes))
  showNotes()
}

// Function edit notes

function updateNote(noteId, title, desc) {
  isUpdate = true
  updateId = noteId
  addBox.click()
  titleTag.value = title
  descTag.value = desc
  addBtn.innerText = 'Concluir'
  modalTitle.innerText = 'Editar Nota '
  console.log(noteId, title, desc)
}

addBtn.addEventListener('click', e => {
  e.preventDefault()
  let noteTitle = titleTag.value,
    noteDesc = descTag.value

  if (noteTitle || noteDesc) {
    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDate(),
      year = dateObj.getFullYear()

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${day} de ${month}, ${year}`
    }
    if (!isUpdate) {
      notes.push(noteInfo) // adding new note to notes
    } else {
      isUpdate = false
      notes[updateId] = noteInfo
    }
    //save notes to localstorage
    localStorage.setItem('notes', JSON.stringify(notes))
    closeIcon.click()
  }
})
