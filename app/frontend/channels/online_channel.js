import consumer from "./consumer"

let online_mes = {}
let online = {}

$(document).on("turbolinks:load", function () {
  online_mes = $('#online');
});

consumer.subscriptions.create("OnlineChannel", {
    received(data) {
      online_mes.empty();
      console.log('load');
      online_mes.append(data['users']);
    }
});

