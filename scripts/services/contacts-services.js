import apiFetch from "./api-fetch.js";

export async function getContacts() {
  return apiFetch("contacts");
}

export async function createContact(newContact = { name, number, email, relation }) {
  return apiFetch("contacts", { body: newContact });
}

export async function deleteContact(id) {
  return apiFetch("contacts/" + id, { method: "DELETE" });
}