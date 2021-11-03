Rails.application.routes.draw do
  root to: 'rooms#index'

  resources :rooms, only: %w[create index show], param: :token

  mount ActionCable.server => '/cable'
end
