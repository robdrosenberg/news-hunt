class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.string :url
      t.string :comments_url
      t.integer :points
      t.integer :comments
      t.string :author
      t.string :source

      t.timestamps
    end
  end
end
