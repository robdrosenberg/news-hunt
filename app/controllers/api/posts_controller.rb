class Api::PostsController < ApplicationController

  def all
    @all_posts = []
    HackerNews.get_posts.each do |post|
      @all_posts << post
    end
    render 'all.json.jbuilder'
  end
  
  def reddit
    @reddit_posts = Reddit.get_posts
    render 'reddit.json.jbuilder'
  end

  def producthunt
    @producthunt_posts = ProductHunt.get_posts
    render 'product_hunt.json.jbuilder'
  end

  def medium

  end

  def hackernews
    @hacker_news_posts = HackerNews.get_posts
    render 'hacker_news.json.jbuilder'
  end

  def githubtrending

  end
end
