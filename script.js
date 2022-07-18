//Declaration of variables
const addBox = document.querySelector('.add-box'),
  modalBox = document.querySelector('.modal-box'),
  closeIcon = modalBox.querySelector(' header i'),
  titleTag = modalBox.querySelector(' input '),
  descTag = modalBox.querySelector(' textarea'),
  addBtn = modalBox.querySelector('button')

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
    let dateObj = new Date()

    modalBox.classList.remove('show')
    console.log(noteTitle, '\n', noteDesc, '\n', dateObj)
  }
})
