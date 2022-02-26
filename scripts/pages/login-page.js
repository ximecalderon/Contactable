import { login } from "../services/sessions-services.js";
import input from "../components/inputs.js";
import footer from "../components/footer.js";
import header from "../components/header.js";
import DOMHandler from "../dom-handler.js";
import ContactsPage from "../pages/contacts-page.js";
import STORE from "../store.js";

function render() {
  const { loginError } = LoginPage.state;
  STORE.setCurrentPage("LoginPage");

  return `
    ${header("Login")}
    <form class="main js-form">
    <section>
      ${input({
    label: "email",
    id: "email",
    placeholder: "email",
    type: "email",
    value: "ximena@mail.com",
    required: true
  })}
      ${input({
    label: "password",
    id: "password",
    placeholder: "password",
    type: "password",
    value: "letmein",
    required: true
  })}
      ${loginError ? `<span class="error-message">${loginError}</span>` : ""}
    </section>
    ${footer(
    { tag: "Signup", class: "js-signup-form", type: "button" },
    { tag: "Login", class: "js-login-submit", type: "submit" }
  )}
  </form>
  `;
};

function listenSubmitForm() {
  const form = document.querySelector(".js-form");

  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { email, password } = event.target;

      const credentials = {
        email: email.value,
        password: password.value,
      };

      const user = await login(credentials);
      STORE.user = user;

      await STORE.fetchContacts();

      DOMHandler.load(ContactsPage);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      DOMHandler.reload();
    }
  });
};

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSubmitForm();
  },
  state: {
    loginError: null,
  },
};

export default LoginPage;
