import ContactsPage from "../pages/contacts-page.js";
import renderLayout from "../components/layout.js";
import STORE from "../store.js";
import footer from "../components/footer.js";


function renderContact() {
  const contact = STORE.contact;

  return `
    <section>
      <div class="user-detail-info">
          <img src="/assets/img/user_default.png" alt="user_avatar">
          <h1 class="heading">${contact.name}</h1>
          <span class="gray-400">${contact.relation}</span>
      </div>
      <div class="user-comms">
          <div class="user-data">                
              <span>Number:</span>
              <span class="user-data-value">${contact.number}</span>
          </div>
          <div class="user-data">
              <span>Email:</span>
              <span class="user-data-value">${contact.email}</span>
          </div>
      </div>
    </section>
  `
};

function render() {
  return `
    ${renderContact()}
    ${footer(
    { tag: "Back", class: "js-back", type: "button" },
    { tag: "Delete", class: "js-delete", type: "button" },
    { tag: "Edit", class: "js-edit", type: "button" }
  )}
  `
};

function listenGoBack() {
  const button = document.querySelector(".js-back");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    await STORE.fetchContacts();
    renderLayout(ContactsPage)
  });
};

const ContactPage =
{
  toString() {
    return render();
  },
  addListeners() {
    listenGoBack()
  },
  title: "Contact Detail"
};

export default ContactPage;