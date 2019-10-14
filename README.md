# Halloween ♥︎ Treats Lab 
Happy Halloween! Let's make an app where we can visit houses for free treats!

# Setup
In your terminal, run `open index.html` from the halloween-treats-lab directory.

**This lab comes with its own backend Rails API.** Change directory into `halloween-treats-backend` and run `rails db:create` and `rails db:migrate`. Then run `rails s` to run your server.

# Deliverables
1. On page load, images of the houses should appear on the street, in the `#main-container` div.
2. When I click on a house, the house's show page should appear in the `#main-container` div, **replacing** the houses. 
3. The show page should include the following:
    - An image of the house's owner
    - The owner's greeting
    - How much candy the house has left
    - A button to ask for candy
    - If there is no more candy left, instead of the button, render the line `"Sorry, I'm out of candy!"`
    - A "Go Back" button to see all of the houses again. 
4. Clicking on the button will DELETE one of the candy instances associated with the house from your database.

