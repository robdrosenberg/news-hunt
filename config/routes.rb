Rails.application.routes.draw do
  namespace :api do
    get 'reddit' => 'posts#reddit'
    get 'producthunt' => 'posts#producthunt'
    get 'medium' => 'posts#medium'
    get 'hackernews' => 'posts#hackernews'
    get 'githubtrending' => 'posts#githubtrending'
    get 'all' => 'posts#all'
  end
end
