class ProductHunt < ApplicationRecord
  def self.get_posts
    response = Unirest.get("https://api.producthunt.com/v1/posts", headers: {'Authorization': 'Bearer 3e627f2710c24eadf5c4cbdda0bd0aeace3adbe0b706ed8f14a4e4eb60bab936'})
    posts = response.body['posts'][0..19]
    posts.map!{|post| normalize(post)}
  end

  def self.normalize(post)
    {
      id: post['id'],
      title: post['name'],
      url: post['discussion_url'],
      points: post['votes_count'],
      comments: post['comments_count'],
      author: post['user']['username']
    }
  end
end
