var url_string = window.location.href
var url = new URL(url_string);
var username = url.searchParams.get("name");
var number = url.searchParams.get("number");
var messageBtn = document.getElementById("msg");
var btn = document.querySelector('button');
var messages = document.getElementById("messages")
console.log(username)
console.log(number)

// const sender_url = "http://127.0.0.1:7000/api/add";
// const xhr = new XMLHttpRequest();
sender = JSON.stringify({"name": username,"code":number});
// console.log(sender)
// xhr.open('POST',sender_url);
// xhr.send(sender);

$.ajax({
    type: "POST",
    contentType: "application/json;charset=utf-8",
    url: "http://127.0.0.1:7000/api/add",
    traditional: "true",
    data: sender,
    dataType: "json"
    });



$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            message: $("#msg").val(),
        };
        console.log(formData)
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "http://127.0.0.1:7000/api/message",
            traditional: "true",
            data: JSON.stringify(formData),
            dataType: "json"
            });
        event.preventDefault();
    });
});
// var socket = io();
// socket.on('connect', function() {
//     console.log('Connected to server');
// });
// socket.on('receive_message', function(msg) {
//     console.log('Received message: ', msg)
// })
// function sendMessage() {
//     msg = $('#msg').val()
//     socket.emit('message', msg)
// }