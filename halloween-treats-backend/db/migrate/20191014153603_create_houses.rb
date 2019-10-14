class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :house_img
      t.string :owner_img
      t.string :greeting
    end
  end
end
