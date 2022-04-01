class ApplicationController < ActionController::Base
  before_action :require_login

  private

  def not_authenticated
    redirect_to main_app.login_url
  end
end
