class CreateProductHunts < ActiveRecord::Migration[5.2]
  def change
    create_table :product_hunts do |t|

      t.timestamps
    end
  end
end
