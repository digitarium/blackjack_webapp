require 'rubygems'
require 'sinatra'
require 'pry'

set :sessions, true

get '/' do
  if session[:player_name]
    redirect '/game'
  else
    redirect '/new_player'
  end
end

get '/new_player' do
  erb :new_game
end

post '/new_player' do
  if params[:player_name]

    session[:player_name] = params[:player_name]
  # progress to the game
end

get '/game' do
  # set up initial game values

  erb :new_game
end
