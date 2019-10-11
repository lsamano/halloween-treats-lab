class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :poem_id
    end
    add_index :comments, :poem_id
  end
end
