export async function fetchJSON(url, options = {}) {
  const answer = await fetch(url, {headers:{Accept: 'application.json'}})
    if (answer.ok) {
      return answer.json()
    }
    throw Error('Problème récupération JSON')
}