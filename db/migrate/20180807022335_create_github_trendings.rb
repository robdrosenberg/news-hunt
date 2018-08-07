class CreateGithubTrendings < ActiveRecord::Migration[5.2]
  def change
    create_table :github_trendings do |t|

      t.timestamps
    end
  end
end
