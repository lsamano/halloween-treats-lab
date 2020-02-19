House.destroy_all
Candy.destroy_all

data = [
    {
        "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/small_house-home-256.png",
        "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_027_death_reaper_halloween_grim-256.png",
        "greeting": "Death to all candy - destroy them by eating them all."
    },
    {
        "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/big_house-home-256.png",
        "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_023_ghost_halloween_phantom_casper-256.png",
        "greeting": "Boo!"
    },
    {
        "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/simple_front_view_house-home-256.png",
        "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_032_skeleton_skull_halloween_horror-256.png",
        "greeting": "It's hard not having any muscle..."
    },
    {
        "house_img": "https://cdn0.iconfinder.com/data/icons/free-any-house/96/house_and_garage-home-256.png",
        "owner_img": "https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_016_clown_halloween_pennywise_it-256.png",
        "greeting": "Ho ho ho."
    }
]

data.each { |object| House.create(object) }

# name_array = [
#   "chocolate", "taffy", "lollipop", "gummy bears", "gummy worms", "minty-fresh gum", "candy corn"
# ]

image_array = [
  "https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Toilet-Paper-512.png",
  "https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Candy-Corn-512.png",
  "https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Candy-02-512.png",
  "https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Candy-01-512.png",
  
]

House.all.each { |house|
    7.times do
      house.candies.create(name: name_array.sample)
    end
}

puts "Done."
