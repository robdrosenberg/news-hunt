require 'unirest'

class HackerNews < ApplicationRecord
  def self.get_post_ids
    response = Unirest.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    response.body[0..19]
  end

  def self.get_posts
    ids = get_post_ids
    posts = ids.map do |id|
      response = Unirest.get("https://hacker-news.firebaseio.com/v0/item/#{id}.json?print=pretty")
      normalize(response.body)
    end
  end

  def self.normalize(post)
    {
      id: post['id'],
      title: post['title'],
      url: post['url'],
      points: post['score'],
      comments: post['descendants'],
      comments_url: "https://news.ycombinator.com/item?id=#{post['id']}" ,
      author: post['by'],
      source: 'Hacker News'
    }
  end

end
