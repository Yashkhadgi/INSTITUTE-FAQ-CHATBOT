let userName = "";
let step = 0;

function startChat() {
    addBotMessage("Welcome to Institute FAQ Chatbot 😊");
    addBotMessage("May I know your good name?");
    document.getElementById("user-input").disabled = false;
    step = 1;
}

function sendMessage() {
    let input = document.getElementById("user-input");
    let userText = input.value.trim();
    if (userText === "") return;

    addUserMessage(userText);
    input.value = "";

    if (step === 1) {
        userName = userText;
        addBotMessage("Hello " + userName + "! 👋");
        addBotMessage("How can I help you today?");
        step = 2;
        return;
    }

    chatbotReply(userText.toLowerCase());
}

function chatbotReply(msg) {
    if (msg.includes("time") || msg.includes("timing")) {
        addBotMessage("College timing is 9:00 AM to 5:00 PM.");
    }
    else if (msg.includes("fee")) {
        addBotMessage("Annual fees range from ₹80,000 to ₹1,20,000.");
    }
    else if (msg.includes("course")) {
        addBotMessage("We offer B.Tech, M.Tech, MBA and Diploma courses.");
    }
    else if (msg.includes("admission")) {
        addBotMessage("Admissions are based on entrance exams and counseling.");
    }
    else if (msg.includes("hostel")) {
        addBotMessage("Yes, hostel facility is available.");
    }
    else if (msg.includes("placement")) {
        addBotMessage("We have a strong placement record.");
    }
    else if (msg.includes("contact")) {
        addBotMessage("Contact number: +91-9876543210");
    }
    else if (msg.includes("exit")) {
        addBotMessage("Thank you " + userName + "! Have a great day 😊");
    }
    else {
        addBotMessage("Sorry, I didn't understand that.");
    }
}

function addBotMessage(text) {
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>Bot:</b> ${text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(text) {
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>You:</b> ${text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("message").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
