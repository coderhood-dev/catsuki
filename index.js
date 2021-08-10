const button = document.getElementById('buy-now')

button.addEventListener('click', () => {
  if (button.innerHTML === 'Comprar ahora') {
    button.innerHTML = 'Gracias por tu compra!'
  } else {
    button.innerHTML = 'Comprar ahora'
  }
})

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
  const card = cards[i]

  const indexElement = document.createElement('p')
  indexElement.innerHTML = i + 1

  card.appendChild(indexElement)

  card.addEventListener('click', () => {
    card.remove()
  })
}