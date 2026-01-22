def start_chat():
    print("🤖 Welcome to Institute FAQ Chatbot")
    print("Type 'exit' anytime to end the chat\n")

    name = input("Bot: May I know your good name? 😊\nYou: ")

    print(f"\nBot: Hello {name}! 👋")
    print("Bot: How can I help you today?\n")

    while True:
        user = input(f"{name}: ").lower()

        if user == "exit":
            print(f"\nBot: Thank you {name}! Have a great day 😊")
            break

        elif "time" in user or "timing" in user:
            print("Bot: College timing is 9:00 AM to 5:00 PM.")

        elif "fee" in user:
            print("Bot: Annual fees range from ₹80,000 to ₹1,20,000.")

        elif "course" in user:
            print("Bot: We offer B.Tech, M.Tech, MBA, and Diploma programs.")

        elif "admission" in user:
            print("Bot: Admissions are based on entrance exams and counseling.")

        elif "address" in user or "location" in user:
            print("Bot: The institute is located in Nagpur, Maharashtra.")

        elif "contact" in user or "phone" in user:
            print("Bot: You can contact us at +91-9876543210.")

        elif "email" in user:
            print("Bot: Our official email is info@institute.edu")

        elif "hostel" in user:
            print("Bot: Hostel facilities are available for boys and girls.")

        elif "placement" in user:
            print("Bot: We have a strong placement cell with good packages.")

        elif "library" in user:
            print("Bot: The library is open from 8:00 AM to 8:00 PM.")

        elif "exam" in user:
            print("Bot: Exams are conducted semester-wise.")

        elif "scholarship" in user:
            print("Bot: Scholarships are available for eligible students.")

        else:
            print("Bot: Sorry, I didn’t understand that. Please ask another question.")


input("Press ENTER to start chat...")
start_chat()
