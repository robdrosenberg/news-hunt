class UsersController < ApplicationController
  def create
    user = User.new(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if user.save
      render json: {message: 'User created successfully'}, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :bad_request
    end
  end

  def show
    if current_user
      user = User.find_by(id: current_user.id)
    else
      user = User.find_by(id: params[:id])
    end
    render json: user.as_json
    
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user.destroy
      render json: {message: "User deleted successfully"}
    else
      render json: {message: user.errors.full_messages}, status: :bad_request
    end
  end

end
