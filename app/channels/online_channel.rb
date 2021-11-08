class OnlineChannel < ApplicationCable::Channel
  def subscribed
    stream_from "online_channel"
    show_users('online' => true)
  end

  def unsubscribed
    stream_from "online_channel"
    show_users('online' => false)
  end

  def show_users(data)
    OnlineService.new(user: current_user, online: data['online']).perform
  end
end
