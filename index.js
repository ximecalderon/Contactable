import renderLayout from "./scripts/components/layout.js";
import LoginPage from "./scripts/pages/login-page.js";
import SignupPage from "./scripts/pages/signup-page.js";
import ContactsPage from "./scripts/pages/contacts-page.js";
import ContactPage from "./scripts/pages/show-contact.js";
import AddContactPage from "./scripts/pages/add-contact.js";
import EditContactPage from "./scripts/pages/edit-contact.js";
import STORE from "./scripts/store.js";

switch (STORE.currentPage) {
  case "Login":
    renderLayout(LoginPage)
    break;
  case "Signup":
    renderLayout(SignupPage)
    break;
  case "Contactable":
    await STORE.fetchContacts();
    renderLayout(ContactsPage)
    break;
  case "Contact Detail":
    await STORE.getContact();
    renderLayout(ContactPage)
    break;
  case "Create new contact":
    renderLayout(AddContactPage)
    break;
  case "Edit contact":
    await STORE.getContact();
    renderLayout(EditContactPage)
    break;
  default:
    renderLayout(LoginPage)
}