import consumer from "./consumer"

let online = {};

const createOnlineChannel = onlineId => {
  online = consumer.subscriptions.create("OnlineChannel", {
    connected() {

    },

    disconnected() {

    },

    received(data) {
      $('#online').append(data['online'])
    }
  });
}
