document.addEventListener('DOMContentLoaded', () => {
    addClickToButton()
})

const addClickToButton = () => {
    const cycleButton = document.getElementById('cycle-button')
    cycleButton.addEventListener('click', cyclePoems)
}

const cyclePoems = event => {
    fetch('https://www.poemist.com/api/v1/randompoems')
    .then(res => res.json())
    .then(data => console.log(data)
    )
}