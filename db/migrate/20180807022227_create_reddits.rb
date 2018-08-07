class CreateReddits < ActiveRecord::Migration[5.2]
  def change
    create_table :reddits do |t|

      t.timestamps
    end
  end
end
