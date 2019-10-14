document.addEventListener('DOMContentLoaded', () => {
    fetchHouses()
})

 const fetchHouses = () => {
     fetch('http://localhost:3000/houses')
     .then(res => res.json())
     .then(houses => houses.forEach(createHouseDiv))
 }

const createHouseDiv = house => {
    // make img
    const houseImg = document.createElement('img')
    houseImg.src = house.house_img
    
    // attach click event handler
    houseImg.addEventListener('click', event => showHouse(house))
    
    // attach to street
    const streetDiv = document.getElementById('street')
    streetDiv.append(houseImg)
}

const showHouse = house => {
    const streetDiv = document.getElementById('street')
    streetDiv.innerHTML = `
        <img src='${house.house_img}'/>
        <img src='${house.owner_img}'/>
        <blockquote>"${house.greeting}"</blockquote>
        <button id='back-button'>Go Back</button>
        <button id='candy-button'>Ask for Candy!</button>
    `
    const backButton = document.getElementById('back-button')
    backButton.addEventListener('click', event => {
        streetDiv.innerHTML = ""
        fetchHouses()
    })
    const candyButton = document.getElementById('candy-button')
    candyButton.addEventListener('click', event => {

    })
}