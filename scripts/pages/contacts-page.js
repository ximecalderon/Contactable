import renderLayout from "../components/layout.js";
import renderContacts from "../components/contacts.js";
import ContactPage from "../pages/show-contact.js";
import AddContactPage from "../pages/add-contact.js";
import { createContact, editContact } from "../services/contacts-services.js";
import STORE from "../store.js";

function render() {
  STORE.setCurrentPage("Contactable");

  return `
    <main class="main">
      ${renderContacts()}
      <div class="add-icon">
        <img src="assets/icons/cross.svg" alt="add-contact" class="margin-center">
      </div>
    </main>
  `
};

function listenShowContact() {
  const triggers = document.querySelectorAll(".contact-info");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", async (event) => {
      event.preventDefault();
      const id = event.target.closest("[data-id]").dataset.id;

      await STORE.setContact(id);
      renderLayout(ContactPage)
    });
  })
};

function listenFavoriteContact() {
  const triggers = document.querySelectorAll(".favorite");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", async (event) => {
      event.preventDefault();
      const id = event.target.closest("[data-id]").dataset.id;
      const contact = STORE.contacts.find(contact => contact.id == id)
      const value = (contact.favorite ? false : true)

      await editContact(id, { favorite: value });
      await STORE.fetchContacts();
      renderLayout(ContactsPage)
    });
  })
};

function listenAddContact() {
  const triggers = document.querySelectorAll(".add-icon");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      renderLayout(AddContactPage)
    });
  })
};

const ContactsPage =
{
  toString() {
    return render();
  },
  addListeners() {
    listenShowContact();
    listenFavoriteContact();
    listenAddContact()
  },
  title: "Contactable"
};

export default ContactsPage;
