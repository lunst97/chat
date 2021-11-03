class OnlineChannel < ApplicationCable::Channel
  def subscribed
    stream_from "online_channel"
    OnlineService.new(user: current_user, online: true).perform
  end

  def unsubscribed
    stream_from "online_channel"
    OnlineService.new(user: current_user, online: false).perform
  end
end
