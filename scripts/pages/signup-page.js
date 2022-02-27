import { signup } from "../services/user-services.js";
import {input} from "../components/inputs.js";
import footer from "../components/footer.js";
import renderLayout from "../components/layout.js";
import ContactsPage from "../pages/contacts-page.js";
import LoginPage from "../pages/login-page.js";
import STORE from "../store.js";

function render() {
  const { signupError } = SignupPage.state;

  return `
    <form class="main js-form">
    <section>
      ${input({
    label: "email",
    id: "email",
    placeholder: "email",
    type: "email",
    value: "test1@ximena.com",
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
      ${signupError ? `<span class="error-message">${signupError}</span>` : ""}
    </section>
    ${footer(
    { tag: "Login", class: "js-login-form", type: "button" },
    { tag: "Create Account", class: "js-signup-submit", type: "submit" }
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

      const user = await signup(credentials);
      STORE.user = user;

      await STORE.fetchContacts();

      renderLayout(ContactsPage);
    } catch (error) {
      LoginPage.state.signupError = error.message;

      renderLayout(SignupPage);
    }
  });
};

function listenLogin() {
  const button = document.querySelector(".js-login-form");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    STORE.setCurrentPage("Login");
    renderLayout(LoginPage);
  });
};

const SignupPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogin();
    listenSubmitForm()
  },
  state: {
    signupError: null
  },
  title: "Signup"
};

export default SignupPage;
