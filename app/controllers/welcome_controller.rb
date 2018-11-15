class WelcomeController < ApplicationController
  def index
    render file: Rails.root.join('views', 'welcome', 'index.html.erb')
  end
end
