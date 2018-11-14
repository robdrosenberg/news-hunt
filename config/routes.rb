Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post 'users' => 'users#create'
  get 'reddit' => 'posts#reddit'
  get 'producthunt' => 'posts#producthunt'
  get 'medium' => 'posts#medium'
  get 'hackernews' => 'posts#hackernews'
  get 'githubtrending' => 'posts#githubtrending'
  get 'all' => 'posts#all'
  get 'bookmarks' => 'bookmarks#index'
  post 'bookmarks' => 'bookmarks#create'
  delete 'bookmarks' => 'bookmarks#destroy'
  root to: 'index'
end
