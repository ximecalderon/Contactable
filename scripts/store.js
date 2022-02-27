import { listContacts } from "./services/contacts-services.js";
import { showContact } from "./services/contacts-services.js";

const loggedIn = function () {
  return (sessionStorage.getItem("contactable_token") ? true : false)
};

function getCurrentPage() {
  if (loggedIn()) return sessionStorage.getItem("current_page");
  return "Login"
};

// function getContactID() {
//   return sessionStorage.getItem("contactable-contactID")
// };

async function fetchContacts() {
  if (loggedIn()) return this.contacts = await listContacts();
  return this.contacts = null
};

async function getContact() {
  const id = sessionStorage.getItem("contactable-contactID");

  this.contact = await showContact(id)
};

async function setContact(id) {
  sessionStorage.setItem("contactable-contactID", id);

  this.contact = await showContact(id)
};

const setCurrentPage = function (page) {
  sessionStorage.setItem("current_page", page)
  this.currentPage = getCurrentPage();
};

const STORE = {
  user: null,
  currentPage: getCurrentPage(),
  setContact,
  getContact,
  fetchContacts,
  setCurrentPage
};

export default STORE;
