export class LISTTODO {

  #liste = []

  constructor (liste) {
    this.#liste = liste
  }

  appendToDo(element) {
    element.innerHTML = `<ul class="taches-list">
    </ul>`
    const ul = element.querySelector('.taches-list')
    for (let tache of this.#liste) {
      const t = new TODO(tache)
      t.createToDo(ul)
    }
  }
}

class TODO {

  #tache

  constructor (todo) {
    const li = document.createElement('li')
    li.classList.add(`tache-${todo.nbr}`)

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `tache-${todo.nbr}`)
    if(todo.doned) {checkbox.setAttribute('checked', 'true')}

    
    const label = document.createElement('label')
    label.setAttribute('for', `tache-${todo.nbr}`)
    label.innerText = todo.title
    
    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash')
    trashBtn.innerHTML = `<svg><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"/><path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"/></svg>`
    
    li.append(checkbox)
    li.append(label)
    li.append(trashBtn)

    this.#tache = li
  }

  createToDo(element) {
    element.append(this.#tache)
  }
}