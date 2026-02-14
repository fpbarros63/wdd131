function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const feedback = document.querySelector("#formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date().toISOString(),
    };

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push(data);
    localStorage.setItem("messages", JSON.stringify(messages));

    if (feedback) {
      feedback.textContent = `Thank you, ${data.name}. Your message has been saved locally.`;
    }

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
    initContactForm();
});