document.addEventListener('DOMContentLoaded', (event) => {
    // Function to send a message
    window.sendMessage = function() {
        const messageInput = document.getElementById('userMessage');
        const messagesContainer = document.getElementById('messages');
        const messageText = messageInput.value.trim();

        if (messageText === '') {
            return;
        }

        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = messageText;
        messagesContainer.appendChild(userMessage);

        // Clear the input field
        messageInput.value = '';

        // Get a bot response
        const botResponse = getBotResponse(messageText);

        // Display bot response
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = botResponse;
        messagesContainer.appendChild(botMessage);

        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Function to get bot response
    function getBotResponse(message) {
        const responses = {
            'hello': 'Hi there! How can I help you?',
            'how are you': 'I am just a bot, but I am doing great!',
            'what is your name': 'I am a chatbot without a name. You can call me Chatbot.',
            'default': 'Sorry, I did not understand that. Can you rephrase?'
        };

        // Normalize the message to lower case
        const normalizedMessage = message.toLowerCase();

        // Return the response based on the message
        return responses[normalizedMessage] || responses['default'];
    }

    // Add event listener for Enter key press
    document.getElementById('userMessage').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    document.addEventListener('DOMContentLoaded', (event) => {
        // Initialize chatbot or any other necessary functions
        // Existing chatbot.js code goes here
    });
    

});

