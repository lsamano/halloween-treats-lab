# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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

House.all.each { |house| 
    house.candies << Candy.create(name: "chocolate")
    house.candies << Candy.create(name: "taffy")
}

puts "Done."