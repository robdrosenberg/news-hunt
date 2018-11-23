class Api::PostsController < ApplicationController

  def all
    @all_posts = []
    hackernews = HackerNews.get_posts
    reddit = Reddit.get_posts
    producthunt = ProductHunt.get_posts
    github_trending = GithubTrending.get_posts
    i = 0
    10.times do
      @all_posts << hackernews[i]
      @all_posts << reddit[i]
      @all_posts << producthunt[i]
      @all_posts << github_trending[i]
      i+=1
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
    @github_trending_posts = GithubTrending.get_posts
    render 'github_trending.json.jbuilder'
  end
end
