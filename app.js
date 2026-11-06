
function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("active");
  }
}

// Search departments, doctors and donors
function searchCards() {
  const searchInput = document.getElementById("search");

  if (!searchInput) return;

  const query = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".searchable");

  cards.forEach(function(card) {
    const content = card.innerText.toLowerCase();

    if (content.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Feedback form
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const feedbackMessage =
      document.getElementById("feedbackMessage");

    feedbackMessage.innerHTML =
      "Thank you, " +
      escapeHTML(name) +
      "! Your feedback has been received in this demo.";

    feedbackForm.reset();
  });
}

// Prevent HTML injection in feedback message
function escapeHTML(text) {
  return text.replace(/[&<>"']/g, function(character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}
