class WelcomeController < ApplicationController
  def index
    render file: Rails.root.join('public', 'Index.html')
  end
end
