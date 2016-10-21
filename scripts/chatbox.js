$( document ).ready(function() {

});

// Either pass 'pepper' or 'user' as sender and string as msg
function sendMessage(sender, msg) {
  var chatName = (sender == 'user')? 'You':'Pepper';
  $(".chat-wrapper").append(
    '<div class="' + sender + ' chat-container">'+
      '<label>' + chatName + '</label>'+
      '<p>' + msg + '</p>' +
    '</div>'
  );
  $('#chatbox').scrollTop( $('.chat-wrapper').height() );
}

// Empties 'chat-wrapper' for new conversation
function clearMessage() {
  $(".chat-wrapper").empty();
}
