class AddUserIdToBookmarks < ActiveRecord::Migration[5.2]
  def change
    add_column :bookmarks, :user_id, :integer
  end
end
