const CATAPI = 'https://api.thecatapi.com/v1/images/search'
const DOGAPI = 'https://api.thedogapi.com/v1/images/search'
const img = document.querySelector('img')

function refreshDog() {
  fetch(DOGAPI)
  .then(res => res.json())
  .then(data => {
    img.src = data[0].url
  })
}

function refreshCat() {
  fetch(CATAPI)
  .then(res => res.json())
  .then(data => {
    img.src = data[0].url
  })
}

refreshDog()
refreshCat()