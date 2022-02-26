import Contacts from "../components/contacts.js";
import STORE from "../store.js";

function render() {
  STORE.setCurrentPage("Contactable");

  return `
    <main class="main">
      ${Contacts}
      <div class="add-icon">
        <img src="/assets/icons/cross.svg" alt="add-contact" class="margin-center">
      </div>
    </main>
  `
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
