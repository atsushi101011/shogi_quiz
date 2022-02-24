Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :v1 do
    resources :questions, only: [:create, :destroy, :index, :update]
  end
end
