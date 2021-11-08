import consumer from "./consumer"

let online = {};
$(document).on("turbolinks:load", function () {
  const createOnlineChannel = onlineId => {
    online = consumer.subscriptions.create("OnlineChannel", {
      received(data) {
        $('#online').empty();
        $('#online').append(data['users']);
      }
    });
  }
});