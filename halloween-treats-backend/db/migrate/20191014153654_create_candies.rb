class CreateCandies < ActiveRecord::Migration[5.2]
  def change
    create_table :candies do |t|
      t.integer :house_id
      t.string :name
    end
    add_index :candies, :house_id
  end
end
