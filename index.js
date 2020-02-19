document.addEventListener('DOMContentLoaded', () => {
    fetchHouses()
})

 const fetchHouses = () => {
     fetch('http://localhost:3000/houses')
     .then(res => res.json())
     .then(showHouses)
 }

const showHouses = houses => {
  const newStreet = document.createElement('div')
  newStreet.id = "street"
  document.getElementById('right-column').append(newStreet)
  houses.forEach(createHouseDiv)
}

const createHouseDiv = house => {
    // make img
    const houseImg = document.createElement('img')
    houseImg.src = house.house_img
    houseImg.className = "hoverable"

    // attach click event handler
    houseImg.addEventListener('click', event => showHouse(house))

    // attach to street
    const streetDiv = document.getElementById('street')
    streetDiv.append(houseImg)
}

const showHouse = house => {
    const candiesLeft = house.candies.length || "Sorry, I'm out of candy!"
    const streetDiv = document.getElementById('street')
    streetDiv.innerHTML = `
        <div class="house">
        <img src='${house.house_img}'/>
        <img src='${house.owner_img}'/>
        <blockquote>"${house.greeting}"</blockquote>
        <p>Candies Left: <span id='candy-left'>${candiesLeft}</span></p>
        <button id='back-button'>Go Back</button>
        <button id='candy-button' ${!house.candies.length ? "disabled" : ""}>Ask for Candy!</button>
        </div>
    `
    const backButton = document.getElementById('back-button')
    backButton.addEventListener('click', event => {
        document.getElementById("right-column").innerHTML = ""
        fetchHouses()
    })
    const candyButton = document.getElementById('candy-button')
    candyButton.addEventListener('click', event => {
        candyButton.disabled = true
        if (house.candies.length > 0) {
            const candy = house.candies[0]
            fetch(`http://localhost:3000/candies/${candy.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(updatedHouse => {
                const candyLeft = document.getElementById('candy-left')
                candyLeft.innerText = updatedHouse.candies.length || "Sorry, I'm out of candy!"
                const myCandy = document.getElementById('my-candy')
                const newCandyLi = document.createElement('div')
                newCandyLi.innerHTML = `<img src="${candy.image_url}" class="hoverable candy-img"/>`
                myCandy.prepend(newCandyLi)
            })
        }
    })
}
