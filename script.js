document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Navbar Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav");
  });
});

 // Chatbot Toggle
  const chatbotBtn = document.createElement("button");
  chatbotBtn.className = "chatbot-button";
  chatbotBtn.innerText = "💬";
  document.body.appendChild(chatbotBtn);

  const chatbotWindow = document.createElement("div");
  chatbotWindow.className = "chatbot-window";
  chatbotWindow.innerHTML = `
    <div class="chatbot-messages"></div>
    <div class="chatbot-input">
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  `;
  document.body.appendChild(chatbotWindow);

  chatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });

  const input = chatbotWindow.querySelector("input");
  const sendBtn = chatbotWindow.querySelector("button");
  const messages = chatbotWindow.querySelector(".chatbot-messages");

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
      const userMsg = document.createElement("div");
      userMsg.textContent = "You: " + text;
      messages.appendChild(userMsg);

      const botMsg = document.createElement("div");
      botMsg.textContent = "Bot: Thanks for your message!";
      messages.appendChild(botMsg);

      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  });