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

# Models
There is a `House` model and a `Candy` model.
A house has many candies.
A candy belongs to a house.

# Deliverables
## Read (Index)
1. On page load, images of the houses should appear in the `#right-column` div.
  - Fetch from `"http://localhost:3000/houses"`, which will return an array of objects.
  - Render the image of each house into the `#right-column` div.
    - Each house object has the following example data:
      ```json
      {
        "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/huge_front_view_house_with_windows-home-256.png",
        "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_017_mummy_halloween_bandages_deceased-512.png",
        "greeting": "Salutations.",
        "candies": [{}, {}, {}]
      }
      ```
      **NOTE: The `candies` key leads to an array of candy instances which the house owns.**
  - BONUS CSS:
    - Wrap a div around all the house images, git it a class of `street` to add a fade-in effect to the houses on page load.
    - Give each house image a class of `hoverable` to add hover animation to it.

## Read (Show)
2. When I click on a house image, the house's show page should appear in the `#right-column` div, **replacing** all the houses.
3. The house show page should include the following:
    - An image of the house
    - An image of the house's owner
    - The owner's greeting
    - How much candy the house has left
      - If there is no more candy left, render the line `"Sorry, I'm out of candy!"`
    - BONUS CSS:
        - Wrap your show page in a div with a class of `house` for a nice fade-in CSS animation.
4. The house show page should also have two buttons:
    - A "Go Back" button to see all of the houses again. As in, replace the show page with the houses
    - A button to ask for candy
      - BONUS: If there is no more candy left, disable the button

## Delete
5. Clicking on the "ask for candy" button will DELETE one of the candy instances associated with the house from your database.
  - On click, send a DELETE request to `http://localhost:3000/candies/:id`, where `:id` is the id of a candy to be deleted. (Hint: Where did we have access to the ids of our candies? How do we get that info?)
  - *It does not matter which candy is deleted* as long as it belonged to the house.
  - If you run out of candies, run `rails db:seed` in the `halloween-treats-backend` directory.
6. *After the candy is successfully deleted*, update the DOM with the following:
  - Update the number of candies left.
  - Disable the candy-giving button after deletion.
  - Show the image of the deleted candy in the `#my-candy` div.
    - Note that this means *info from something deleted is being displayed*, and therefore it will disappear on page reload.
  - BONUS CSS:
    - Give the candy image a class of `candy-img` for styling and animation.
