class OnlineService
  def initialize(user: , online:)
    @user = user
    @online = online
  end

  def perform
    update_status!
    broadcast_online
  end

  private

  def update_status!
    @user.update! online: @online
  end

  def broadcast_online
    ActionCable.server.broadcast "online_channel", users: render_online
  end

  def render_online
    ApplicationController.renderer.render(partial: 'users/user', collection: User.online)
  end
end