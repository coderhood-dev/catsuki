const button = document.getElementById('buy-now')

button.addEventListener('click', () => {
  if (button.innerHTML === 'Comprar ahora') {
    button.innerHTML = 'Gracias por tu compra!'
  } else {
    button.innerHTML = 'Comprar ahora'
  }
})

const renderCatCard = (cardIndex) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const image = document.createElement('img')
  image.src = 'https://cataas.com/cat'
  image.alt = 'Catsuki'

  card.appendChild(image)

  // agrego el indicador de indice en la card
  const indexElement = document.createElement('p')
  indexElement.innerHTML = cardIndex + 1

  card.appendChild(indexElement)

  // agrego la funcionalidad de eliminar la card al hacerle click
  card.addEventListener('click', () => {
    card.remove()
  })

  cardsContainer.appendChild(card)
}

const cardsContainer = document.getElementsByClassName('catalogue-content')[0]
const addButton = document.getElementById('add-cat-button')

addButton.addEventListener('click', renderCatCard)

// empieza a cargar
// muestra un indicador de que esta cargando
// una vez que carga muestra los elementos

const getCatCards = () => {
  // traer las cards de gatos de la base de datos
  setTimeout(() => {
    const loaderIndicator = document.getElementById('catalogue-loader')
    loaderIndicator.style.display = 'none'

    const catCards = [1, 2, 3, 4, 5]
  
    for (let i = 0; i < catCards.length; i++) {
      renderCatCard(i)
    }
  }, 3000)
}

// cargar las cards de gatos y mostrarlas en pantalla
getCatCards()
