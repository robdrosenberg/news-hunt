require 'unirest'

class HackerNews < ApplicationRecord
  def self.get_posts
      response = Unirest.get('https://api.hnpwa.com/v0/news/1.json')
      posts = response.body[0..19]
      posts.map!{|post| normalize(post)}
  end

  def self.normalize(post)
    {
      id: post['id'],
      title: post['title'],
      url: post['url'],
      points: post['points'],
      comments: post['comments_count'],
      comments_url: "https://news.ycombinator.com/item?id=#{post['id']}" ,
      author: post['user'],
      source: 'Hacker News'
    }
  end
end
