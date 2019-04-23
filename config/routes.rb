Rails.application.routes.draw do

  root to: redirect('/events')

  resources :events, only: [:index, :new, :show, :update], to: 'site#index'

  namespace :api do
    resources :events, only: [:index, :show, :create, :update, :destroy]
  end
end
