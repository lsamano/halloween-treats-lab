# Halloween 🎃 Treats Lab
Happy Halloween! Let's make an app where we can visit houses for free treats!

# Setup
In your terminal, run `open index.html` from the `halloween-treats-lab` directory.

**This lab comes with its own backend Rails API.** Change directory into `halloween-treats-backend` and run the following code:
```
rails db:create
rails db:schema:load
rails db:seed
rails s
```

# Deliverables
## 1. Read (Index)
On page load, images of the houses should appear on the street, in the `#main-container` div.
  - Fetch from `http://localhost:3000/houses`, it will return an array of objects.
  - Each object has the following example data:
    ```json
    {
      "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/huge_front_view_house_with_windows-home-256.png",
      "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_017_mummy_halloween_bandages_deceased-512.png",
      "greeting": "Salutations."
    }
    ```
  - Give each house image a class of `hoverable` to add some CSS hover animation to it.

## 2. Read (Show)
When I click on a house image, the house's show page should appear in the `#main-container` div, **replacing** the houses.
The house show page should include the following:
    - An image of the house
    - An image of the house's owner
    - The owner's greeting
    - How much candy the house has left
      - If there is no more candy left, render the line `"Sorry, I'm out of candy!"`
The house show page should also have two buttons:
    - A button to ask for candy
      - If there is no more candy left, disable the button
    - A "Go Back" button to see all of the houses again.

## 3. Delete
Clicking on the button will DELETE one of the candy instances associated with the house from your database.
    - *After the candy is successfully deleted*, update the number of candies left and show the image of the deleted candy in the `#my-candy` div. Note that this means *info from something deleted is being displayed*, and therefore it will disappear on page reload.
    - If you run out of candies, run `rails db:seed` in the `halloween-treats-backend` directory.
