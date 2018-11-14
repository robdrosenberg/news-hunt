class WelcomeController < ApplicationController
  def index
    redirect_to 'public/index.html'
  end
end
