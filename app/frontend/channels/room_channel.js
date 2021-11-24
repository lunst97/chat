import consumer from "./consumer"

let room = {};

const createRoomChannel = roomId => {
  room = consumer.subscriptions.create({ channel: "RoomChannel", roomId: roomId}, {
    connected() {
    },

    disconnected() {
    },

    received(data) {
      $('#messages').append(data['message'])
      scroll();
    },

    speak: function (message) {
      return this.perform('speak', { message: message });
    }
  });
};

$(document).on("turbolinks:load", function () {
  let messages = $('#messages');
  console.log('connect');

  if (messages.length > 0) {
    createRoomChannel(messages.data('room-id'))
  };

  scroll();
});

$(document).on("keypress", "#message_body", function (event) {
  let message = event.target.value;

  if (event.keyCode == 13 && message != '') {
    room.speak(message);
    event.target.value = '';
  };
  if (event.keyCode == 13) {
    event.preventDefault();
  };
});

const scroll = () => {
  let messagesInner = document.getElementById("messages");

  if (messagesInner) {
    messagesInner.scrollTop = messagesInner.scrollHeight;
  };
};