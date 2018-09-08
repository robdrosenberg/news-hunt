class BookmarksController < ApplicationController
  # before_action :authenticate_user
  def index
    if current_user
      bookmarks = current_user.bookmarks
      render json: bookmarks.as_json
    end
  end

  def create
    bookmark = Bookmark.new(
      title: params[:title],
      url: params[:url],
      comments_url: params[:url],
      points: params[:points],
      comments: params[:comments],
      source: params[:source],
      user_id: current_user.id
    )
  end

  def destroy
    bookmark = Bookmark.find_by(id: params[:id])
    if bookmark.destroy
      render json: {message: "Bookmark Removed"}
    else
      render json: {message: bookmark.errors.full_messages}, status: :bad_request
  end

end
