import { login, logout } from "./scripts/services/sessions-services.js";

const credentials = {
  email: "ximena@mail.com",
  password: "letmein",
};

await login(credentials).then(console.log);

// await logout().then(console.log)

// import { signup } from "./scripts/services/user-services.js";

// const newUser = {
//   email: "ximena@test.com",
//   password: "letmein"
// };

// signup(newUser).then(console.log)

import { listContacts, createContact, deleteContact, showContact, editContact } from "./scripts/services/contacts-services.js";

const newContact = {
  name: "Testino Probino",
  number: "123456789",
  email: "testino@mail.com",
  relation: "Acquaintance"
}

await createContact(newContact).then(console.log);

let contacts = await listContacts();
console.log(contacts);

await deleteContact(contacts[0].id).then(console.log);

contacts = await listContacts();
console.log(contacts);

let contact = await showContact(contacts[0].id);
console.log(contact);

const updatedContact = { name: "Madino Probino", favorite: true };
editContact(contacts[0].id, updatedContact).then(console.log);
