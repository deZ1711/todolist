import { fetchJSON } from "./functions/fetchJSON.js"
import { LISTTODO } from "./class/LISTTODO.js"

const taches = await fetchJSON('/taches.json')
const liste = new LISTTODO(taches)
let ul = document.querySelector('ul')
liste.appendToDo(document.querySelector('.todolist-place'))



// Ajouter une tâche
const form = document.querySelector('form')
let nbrli = document.querySelectorAll('li').length

form.addEventListener('submit', function(e) {
  e.preventDefault()
  nbrli++
  const title = new FormData(form).get('title').trim()
  if (title === '') {
    return
  }
  let ul = document.querySelector('ul')
  const li = document.createElement('li')
  const checkbox = document.createElement('input')
  const label = document.createElement('label')
  const trashBtn = document.createElement('button')
  const svgicon = `<svg><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"/><path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"/></svg>`
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', `tache-${nbrli}`)
  label.setAttribute('for', `tache-${nbrli}`)
  li.classList.add(`tache-${nbrli}`)
  trashBtn.classList.add('trash')
  label.textContent = title
  trashBtn.innerHTML = svgicon
  
  
  li.append(checkbox, label, trashBtn)
  trashBtn.addEventListener('click', function(e) {
    e.preventDefault()
    trashBtn.parentElement.remove()
  })

  checkbox.addEventListener('change', function(e) {
    checkbox.parentElement.classList.toggle('doned')
  })
  
  ul.append(li)
})


// Changements d'onglets
const onglets = document.querySelectorAll('.onglet')
onglets.forEach(button => {
  button.addEventListener("click", (e) => {
    onglets.forEach(onglet => {
      onglet.classList.remove('active')
    })
    button.classList.add('active')
  })
})

  // Supprimer une tâche de fetch
  document.querySelectorAll('.trash').forEach(li => {
    li.addEventListener("click", function(e) {
      li.parentElement.remove()
    })
  });

  const checkbox = document.querySelectorAll('input[type="checkbox"]')
  checkbox.forEach(box => {
    if (box.checked === true) {
      box.parentElement.classList.add('doned')
    } else {
      box.parentElement.classList.remove('doned')
    }
    box.addEventListener('change', function(e) {
      box.parentElement.classList.toggle('doned')
    })
  })
  

  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const filter = e.currentTarget.getAttribute('data-filter')
      // console.log(filter)
      let ul = document.querySelector('ul')
      if (filter === 'todo') {
        ul.classList.add('hide-doned')
        ul.classList.remove('hide-todo')
      } else if (filter === 'doned') {
        ul.classList.add('hide-todo')
        ul.classList.remove('hide-doned')
      } else {
        ul.classList.remove('hide-doned')
        ul.classList.remove('hide-todo')
      }
    })
  });
