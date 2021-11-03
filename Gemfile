source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

gem 'rails', '~> 6.1.4'
gem 'puma', '~> 5.0'
gem 'webpacker', '~> 5.0'
gem 'faker'
gem 'bootsnap'
gem 'redis'

group :development, :test do
  gem 'pry-rails'
  gem 'sqlite3', '~> 1.4'
  gem 'rack-mini-profiler', '~> 2.0'
end

group :production do
  gem 'pg'         #gem to use in production environment
end