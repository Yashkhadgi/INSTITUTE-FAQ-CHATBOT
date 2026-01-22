document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-btn");
    const chatScreen = document.getElementById("chat-screen");
    const startScreen = document.getElementById("start-screen");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatBox = document.getElementById("chat-box");

    let userName = "";
    let awaitingName = false;

    // Start chat button click
    startBtn.addEventListener("click", function() {
        startScreen.style.display = "none";
        chatScreen.style.display = "block";
        botMessage("Welcome to SIT-N Institute FAQ Chatbot 😊");
        setTimeout(() => {
            botMessage("May I know your good name?");
            awaitingName = true;
        }, 500);
        userInput.focus();
    });

    // Send message on button click
    sendBtn.addEventListener("click", handleUserMessage);

    // Send message on Enter key
    userInput.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            handleUserMessage();
        }
    });

    function handleUserMessage() {
        const msg = userInput.value.trim();
        if (!msg) return;

        // User message
        addMessage(msg, "user-msg");

        if (awaitingName) {
            userName = msg;
            awaitingName = false;
            botMessage(`Hello ${userName}! 👋 How can I help you today?`);
        } else {
            handleFAQ(msg);
        }

        userInput.value = "";
    }

    function addMessage(text, className) {
        const p = document.createElement("p");
        p.classList.add(className);
        p.textContent = text;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botMessage(text) {
        addMessage(text, "bot-msg");
    }

    function handleFAQ(msg) {
        const text = msg.toLowerCase();
        let response = "";

        if (text.includes("time") || text.includes("timing")) {
            response = "College timing is 9:00 AM to 5:00 PM.";
        } else if (text.includes("fee")) {
            response = "Annual fees range from ₹80,000 to ₹1,20,000.";
        } else if (text.includes("course")) {
            response = "We offer B.Tech, M.Tech, MBA, and Diploma programs.";
        } else if (text.includes("admission")) {
            response = "Admissions are based on entrance exams and counseling.";
        } else if (text.includes("address") || text.includes("location")) {
            response = "The institute is located in Nagpur, Maharashtra.";
        } else if (text.includes("contact") || text.includes("phone")) {
            response = "You can contact us at +91-9876543210.";
        } else if (text.includes("email")) {
            response = "Our official email is info@institute.edu";
        } else if (text.includes("hostel")) {
            response = "Hostel facilities are available for boys and girls.";
        } else if (text.includes("placement")) {
            response = "We have a strong placement cell with good packages.";
        } else if (text.includes("library")) {
            response = "The library is open from 8:00 AM to 8:00 PM.";
        } else if (text.includes("exam")) {
            response = "Exams are conducted semester-wise.";
        } else if (text.includes("scholarship")) {
            response = "Scholarships are available for eligible students.";
        } else if (text.includes("exit")) {
            response = `Thank you ${userName}! Have a great day 😊`;
        } else {
            response = "Sorry, I didn’t understand that. Please ask another question.";
        }

        setTimeout(() => botMessage(response), 400);
    }
});
