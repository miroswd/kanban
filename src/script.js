const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragEnd)
})

function dragStart() {
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
}

function drag() {
}

function dragEnd() {
  // this ==  card
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')

}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragOver)
  dropzone.addEventListener('dragleave', dragLeave)
  dropzone.addEventListener('drop', drop)
})


function dragOver(){
  // this == dropzone
  this.classList.add('over')
  
  const cardBeingDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeingDragged)
}

function dragLeave(){
  this.classList.remove('over')
}

function drop(){
  this.classList.remove('over')
  console.log('drop')
}