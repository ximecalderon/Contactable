import { input, select } from "../components/inputs.js";
import footer from "../components/footer.js";
import renderLayout from "../components/layout.js";
import ContactsPage from "../pages/contacts-page.js";
import STORE from "../store.js";

function render() {
  return `
    <form class="main">
      <section>
      ${input({
    label: "name",
    id: "name",
    placeholder: "Name",
    type: "text",
    required: true
  })}
      ${input({
    label: "number",
    id: "number",
    placeholder: "Number",
    type: "number",
    required: true
  })}
      ${input({
    label: "email",
    id: "email",
    placeholder: "Email",
    type: "email",
    required: true
  })}
  ${select({
    id: "relation",
    name: "relation"
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

const AddContactPage =
{
  toString() {
    return render();
  },
  addListeners() {
    listenGoBack()
  },
  title: "Create new contact"
};

export default AddContactPage