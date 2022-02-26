// import { listContacts } from "../services/contacts-services.js";
import header from "../components/header.js";
import Contacts from "../components/contacts.js";
import STORE from "../store.js";

function render() {
  STORE.setCurrentPage("ContactsPage");

  return `
    ${header("Contactable")}
    ${Contacts}
  `
};

const ContactsPage =
{
  toString() {
    return render();
  },
  addListeners() {

  }
};

export default ContactsPage;
