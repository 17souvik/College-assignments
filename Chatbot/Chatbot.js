
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestionContainer = document.getElementById('suggestion-container');

    const suggestions = [
        "Book an appointment",
        "Visiting hours",
        "Directions",
        "Services",
        "Emergency",
        "Stop"
    ];

    function populateSuggestions() {
        suggestions.forEach(suggestionText => {
            const suggestionButton = document.createElement('button');
            suggestionButton.textContent = suggestionText;
            suggestionButton.classList.add('suggestion-button');
            suggestionButton.addEventListener('click', () => {
                userInput.value = suggestionText;
                sendButton.click();
            });
            suggestionContainer.appendChild(suggestionButton);
        });
    }

    populateSuggestions();

    sendButton.addEventListener('click', () => {
        const messageText = userInput.value.trim();
        if (messageText !== '') {
            addUserMessage(messageText);
            userInput.value = '';
            processMessage(messageText);
        }
    });

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
            event.preventDefault(); 
        }
    });

    function addUserMessage(messageText) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = messageText;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; 
    }

    function addBotMessage(messageText) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.textContent = messageText;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; 
    }

    async function processMessage(messageText) {
     
        let responseText = '';

        messageText = messageText.toLowerCase();

        if (messageText.includes('appointment')) {
            responseText = "To book an appointment, please call our appointment line at 555-1234.";
        } else if (messageText.includes('visiting hours')) {
            responseText = "Visiting hours are from 2 PM to 4 PM daily.";
        } else if (messageText.includes('directions')) {
            responseText = "We are located at 123 Main Street. You can find directions on our website.";
        } else if (messageText.includes('services')) {
            responseText = "We offer a wide range of services including cardiology, oncology, and pediatrics.";
        } else if (messageText.includes('emergency')) {
            responseText = "In case of an emergency, please dial 911 or go to the nearest emergency room.";
        } else if (messageText.includes('stop')) {
            while (chatbotMessages.firstChild) {
                chatbotMessages.removeChild(chatbotMessages.firstChild);
            }

            addBotMessage("Welcome! How can I help you today?");
            return; 
        }
        else {
            responseText = "I'm sorry, I don't understand. Please try asking about appointments, visiting hours, directions, or services.";
        }

        await new Promise(resolve => setTimeout(resolve, 500)); 
        addBotMessage(responseText);
    }
});