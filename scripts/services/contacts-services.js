import apiFetch from "./api-fetch.js";

export async function listContacts() {
  return apiFetch("contacts");
}

export async function createContact(newContact = { name, number, email, relation }) {
  return apiFetch("contacts", { body: newContact });
}

export async function deleteContact(id) {
  return apiFetch("contacts/" + id, { method: "DELETE" });
}

export async function showContact(id) {
  return apiFetch("contacts/" + id);
}

export async function editContact(
  id, updatedContact = { name, number, email, relation, favorite }
) {
  return apiFetch("contacts/" + id, { method: "PATCH", body: updatedContact });
}