class CreateHackerNews < ActiveRecord::Migration[5.2]
  def change
    create_table :hacker_news do |t|

      t.timestamps
    end
  end
end
