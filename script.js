const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const userMessage = userInput.value;
        appendMessage('user', userMessage);
        processMessage(userMessage.toLowerCase());
        userInput.value = '';
    }
});

function processMessage(message) {
    if (message.includes('hi') || message.includes('hello')) {
        setTimeout(() => {
            appendMessage('bot', 'Hi there!');
        }, 500);
    } else if (message.includes('how are you')) {
        setTimeout(() => {
            appendMessage('bot', "I'm just a bot, but I'm functioning well! How can I assist you?");
        }, 500);

    } else if (message.includes('what is vaidik')) {
            setTimeout(() => {
                appendMessage('bot', "Vaidik is a project guiding platform that offer an extensive library of educational resources to help you every step of the way. Tutorials and Guides: Access detailed tutorials and guides covering a wide range of project types and skill levels. Tools and Materials: Discover recommended tools and materials for your projects. Expert Insights: Learn from experts who share their insights and experiences.");
            }, 500);
        
    } else if (message.includes('contact')) {
        setTimeout(() => {
            appendMessage('bot', 'Sure, here is the contact information: Name: Vaidik, Phone: 9031335057, Email: chysubhash1234@gmail.com');
        }, 500);
    } else if (message.includes('level of projects')) {
        setTimeout(() => {
            appendMessage('bot', 'There are three categories of projects ist for basic that is designed for school kids 2nd is intermediate that is designed for college students and learners while 3rd one is research level that is for researcher.');
        }, 500);
    } else {
        setTimeout(() => {
            appendMessage('bot', "I'm sorry, I'm not programmed to understand that. How can I assist you?");
        }, 500);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender === 'bot' ? 'bot' : 'user');
    messageElement.innerText = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}
