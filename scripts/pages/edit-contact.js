import { editContact } from "../services/contacts-services.js";
import { input, select } from "../components/inputs.js";
import footer from "../components/footer.js";
import renderLayout from "../components/layout.js";
import ContactsPage from "../pages/contacts-page.js";
import STORE from "../store.js";

function render() {
  const contact = STORE.contact;
  const { errors } = EditContactPage.state;

  return `
    <form class="main js-form">
      <section>
      ${input({
    label: "name",
    id: "name",
    placeholder: "Name",
    type: "text",
    value: contact.name,
    required: true,
    errors: errors.name
  })}
      ${input({
    label: "number",
    id: "number",
    placeholder: "Number",
    type: "number",
    value: contact.number,
    required: true,
    errors: errors.number
  })}
      ${input({
    label: "email",
    id: "email",
    placeholder: "Email",
    type: "email",
    value: contact.email,
    required: true,
    errors: errors.email
  })}
  ${select({
    id: "relation",
    name: "relation",
    selected: contact.relation,
    errors: errors.relation
  })}
      </section>
        ${footer(
    { tag: "Cancel", class: "js-cancel", type: "button" },
    { tag: "Save", class: "js-save", type: "submit" }
  )}
    </form>
  `
};

function listenGoBack() {
  const button = document.querySelector(".js-cancel");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    await STORE.fetchContacts();
    renderLayout(ContactsPage)
  });
};


function listenSubmitForm() {
  const form = document.querySelector(".js-form");

  form.addEventListener("submit", async (event) => {
    let response;
    try {
      event.preventDefault();
      const { name, number, email, relation } = event.target;

      const updatedContact = {
        name: name.value,
        number: number.value,
        email: email.value,
        relation: relation.value,
      };

      const id = STORE.contact.id;
      response = await editContact(id, updatedContact);

      await STORE.fetchContacts();
      renderLayout(ContactsPage);
    } catch (error) {
      console.log(response);
      EditContactPage.state.errors = response;
      renderLayout(EditContactPage);
    }
  });
};

const EditContactPage =
{
  toString() {
    return render();
  },
  addListeners() {
    listenGoBack();
    listenSubmitForm()
  },
  state: {
    errors: {},
  },
  title: "Edit contact"
};

export default EditContactPage