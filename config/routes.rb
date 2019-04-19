Rails.application.routes.draw do
  namespace :api do
    resources :events, only: [:index, :show, :create, :update, :destroy]
  end
end
