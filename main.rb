require 'rubygems'
require 'sinatra'
require 'pry'

set :sessions, true

get '/' do
  "Hello David Hernandez!"
end

get '/test' do
  "Hello Batman" + params[:some].to_s
end
