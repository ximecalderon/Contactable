import { login } from "../services/sessions-services.js";
import { input } from "../components/inputs.js";
import footer from "../components/footer.js";
import renderLayout from "../components/layout.js";
import ContactsPage from "../pages/contacts-page.js";
import SignupPage from "../pages/signup-page.js";
import STORE from "../store.js";

function render() {
  const { loginError } = LoginPage.state;

  return `
    <form class="main js-form">
    <section>
      ${input({
    label: "email",
    id: "email",
    placeholder: "email",
    type: "email",
    required: true
  })}
      ${input({
    label: "password",
    id: "password",
    placeholder: "password",
    type: "password",
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

      renderLayout(ContactsPage);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      renderLayout(LoginPage);
    }
  });
};

function listenSignup() {
  const button = document.querySelector(".js-signup-form");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    renderLayout(SignupPage);
  });
};

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSignup();
    listenSubmitForm()
  },
  state: {
    loginError: null
  },
  title: "Login"
};

export default LoginPage;
