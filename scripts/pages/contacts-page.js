import renderContacts from "../components/contacts.js";
import STORE from "../store.js";

function render() {
  STORE.setCurrentPage("Contactable");

  return `
    <main class="main">
      ${renderContacts()}
      <div class="add-icon">
        <img src="/assets/icons/cross.svg" alt="add-contact" class="margin-center">
      </div>
    </main>
  `
};

function listenEditContact() {
  const triggerEl = document.querySelector(".contact-info");

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    // some code
  });
};

function listenFavoriteContact() {
  const triggerEl = document.querySelector(".favorite");

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    // some code
  });
};

function listenAddContact() {
  const triggerEl = document.querySelector(".add-icon");

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    // some code
  });
};

const ContactsPage =
{
  toString() {
    return render();
  },
  addListeners() {

  },
  title: "Contactable"
};

export default ContactsPage;
