require 'rubygems'
require 'sinatra'
require 'pry'

set :sessions, true

get '/' do
  if session[:player_name]
    "#{session[:player_name]}"
  else
    redirect '/new_player'
  end
end

get '/new_player' do
  erb :new_game
end

post '/new_player' do
  session[:player_name] = params[:player_name]
end
