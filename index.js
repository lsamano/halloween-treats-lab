
function fetchHouses() {
  fetch("http://localhost:3000/houses")
  .then(res => res.json())
  .then(renderStreet)
}

const renderStreet = houses => {
  const rightColumn = document.getElementById('right-column')
  rightColumn.innerHTML = ""
  const streetDiv = document.createElement('div')
  streetDiv.id = "street"
  rightColumn.append(streetDiv)
  houses.forEach(renderHouse)
}

const renderHouse = house => {
  const streetDiv = document.getElementById('street')
  const newHouse = document.createElement('img')
  newHouse.src = house.house_img
  newHouse.className = "hoverable"

  newHouse.addEventListener('click', event => showHouse(house))

  streetDiv.append(newHouse)
}

const showHouse = house => {
  const rightColumn = document.getElementById('right-column')
  const candiesLeft = house.candies.length || "Sorry, I'm out of candy!"
  rightColumn.innerHTML = `
  <div class="house">
  <img src="${house.house_img}" />
  <img src="${house.owner_img}" />
  <h2>${house.greeting}</h2>
  <h1>Candy: <span id="amount">${candiesLeft}</span></h1>
  </div>
  `
  const houseDiv = document.querySelector('.house')

  const goBackButton = document.createElement('button')
  goBackButton.innerHTML = "Go Back"
  goBackButton.addEventListener('click', fetchHouses)
  houseDiv.append(goBackButton)

  const candyButton = document.createElement('button')
  candyButton.innerHTML = "Ask for Candy"
  candyButton.addEventListener('click', () => receiveCandy(house))
  if (house.candies.length === 0 ) {
    candyButton.disabled = true
  }
  houseDiv.append(candyButton)

}

const receiveCandy = house => {
  const candyDeleted = house.candies[0]
  fetch(`http://localhost:3000/candies/${candyDeleted.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  })
    .then(res => res.json())
    .then(() => updateDom(house.candies.length - 1, candyDeleted.image_url))
}

const updateDom = (newAmount, imageUrl) => {
  const amountSpan = document.getElementById('amount')
  amountSpan.innerText = newAmount

  const candyImage = document.createElement('img')
  candyImage.src = imageUrl
  candyImage.className = "candy-img"
  const myCandy = document.getElementById('my-candy')
  myCandy.append(candyImage)
}



fetchHouses()
