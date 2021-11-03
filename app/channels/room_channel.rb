class RoomChannel < ApplicationCable::Channel
  def subscribed
    logger.info "subscribed, roomId: #{params[:roomId]}"

    @room = Room.find(params[:roomId])

    stream_from "room_channel_#{@room.id}"
    speak('message' => '* * * joined the room * * *')
  end

  def unsubscribed
    logger.info "unsubscribed"
    speak('message' => '* * * left the room * * *')
  end

  def speak(data)
    logger.info "RoomChannel, #{data.inspect}"

    MessageService.new(body: data['message'], user: current_user, room: @room).perform
    # ActionCable.server.broadcast "room_channel_#{@room.id}", message: data['message']
  end
end
