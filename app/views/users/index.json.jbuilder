json.array!(@users) do |user|
  json.extract! user, :id, :name, :present
  json.url user_url(user, format: :json)
end
