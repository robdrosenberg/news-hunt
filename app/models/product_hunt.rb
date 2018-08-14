class ProductHunt < ApplicationRecord
  def self.get_posts
    response = Unirest.get("https://api.producthunt.com/v1/posts", headers: {'Authorization': "Bearer #{ENV["PRODUCTHUNT_TOKEN"]}"})
    posts = response.body['posts'][0..19]
    posts.map!{|post| normalize(post)}
  end

  def self.normalize(post)
    {
      id: post['id'],
      title: post['name'],
      url: post['redirect_url'],
      comments_url: post['discussion_url'],
      points: post['votes_count'],
      comments: post['comments_count'],
      author: post['user']['username']
    }
  end
end
