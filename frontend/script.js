const ws = new WebSocket('ws://localhost:8080/chat');

ws.onmessage = function(event) {
    const messages = document.getElementById('messages');
    messages.value += event.data + '\n';
    messages.scrollTop = messages.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    ws.send(message);
    messageInput.value = '';
}
