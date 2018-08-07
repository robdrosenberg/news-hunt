require 'net/http'

class HackerNews < ApplicationRecord
  def get_posts
    uri = URI('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    Net::HTTP.get(uri) # => String
  end
end
