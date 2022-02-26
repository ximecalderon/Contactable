import DOMHandler from "./scripts/dom-handler.js";
import STORE from "./scripts/store.js";
import LoginPage from "./scripts/pages/login-page.js";
import ContactsPage from "./scripts/pages/contacts-page.js";

switch (STORE.currentPage) {
  case "LoginPage":
    DOMHandler.load(LoginPage);
    break;
  case "ContactsPage":
    await STORE.fetchContacts();
    DOMHandler.load(ContactsPage);
    break;
  default:
    STORE.setCurrentPage("LoginPage");
    DOMHandler.load(LoginPage);
}