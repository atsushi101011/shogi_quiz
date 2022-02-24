Rails.application.routes.draw do
  namespace :v1 do
    resources :questions, only: [:create, :destroy, :index, :update]
  end
end
