import renderLayout from "./scripts/components/layout.js";
import LoginPage from "./scripts/pages/login-page.js";
import SignupPage from "./scripts/pages/signup-page.js";
import ContactsPage from "./scripts/pages/contacts-page.js";
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
  default:
    renderLayout(LoginPage)
}