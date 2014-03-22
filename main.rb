require 'rubygems'
require 'sinatra'
require 'pry'

set :sessions, true

get '/' do
  erb :set_name
end

get '/write_text' do
  "#{params}"
end

post '/set_name' do
  session[:player_name] = params[:player_name]
  redirect '/game'
end

get '/game' do
  session[:deck] = [['2', 'H'], ['3', 'D']]
  session[:player_cards] = []
  session[:player_cards] << session[:deck].pop
  erb :game
end

get '/simple_route' do
  erb :simple_route
end

get '/set_name/' do
  "Hello"
  # "Hello #{params[:name]}!"
end


