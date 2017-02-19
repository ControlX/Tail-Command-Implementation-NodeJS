var socket = io.connect();

socket.on('ping result', function(data) {
  $('div.ping-result').html(data.msg);
 console.log("Hello");
});
