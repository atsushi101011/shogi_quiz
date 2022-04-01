class UsersController < ApplicationController
  skip_before_action :require_login

  # GET /users/new
  def new
    @user = User.new
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
