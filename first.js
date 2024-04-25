document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function () {
        const userMessage = userInput.value;
        displayMessage(userMessage, true);
        const alexaResponse = "I am made by ankit sharma . I can't respond your thought .";
        displayMessage(alexaResponse, false);
        userInput.value = '';
    });

    function displayMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (isUser) {
            messageElement.classList.add('user-message');
        } else {
            messageElement.classList.add('bot-message');
        }
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});