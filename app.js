import { fetchJSON } from "./functions/fetchJSON"
import { LISTTODO } from "./class/LISTTODO"

const ul = document.querySelector('ul')

const taches = await fetchJSON('/taches.json')
const liste = new LISTTODO(taches)
console.log(liste)
