import Rails from "@rails/ujs"
import 'turbolinks/dist/turbolinks'
import 'bootstrap/dist/js/bootstrap'
import 'styles/application.scss'
import 'jquery/dist/jquery'
import '../scripts/cable'
Rails.start()
require("turbolinks").start();

const images = require.context('../images', true)

$(function() {
    console.log('Document is loader')
});

$(document).on("turbolinks:load", function (){
    console.log(' Document is loader (turbolinks:load)')
});

$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
});