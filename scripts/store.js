import { listContacts } from "./services/contacts-services.js";

const loggedIn = function () {
  return (sessionStorage.getItem("contactable_token") ? true : false)
};

function getCurrentPage() {
  if (loggedIn()) return sessionStorage.getItem("current_page");
  return "LoginPage"
};

async function fetchContacts() {
  if (loggedIn()) return this.contacts = await listContacts();
  return this.contacts = null
};

const setCurrentPage = function (page) {
  sessionStorage.setItem("current_page", page)
};

const STORE = {
  user: null,
  currentPage: getCurrentPage(),
  fetchContacts,
  setCurrentPage
};

export default STORE;
