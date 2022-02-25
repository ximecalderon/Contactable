import input from "../components/inputs.js";
import footer from "../components/footer.js";
import header from "../components/header.js";
// import DOMHandler from "../dom-handler.js";
// import { login } from "../services/sessions-service.js";

function render() {
  const { loginError } = LoginForm.state;
  return `
    ${header("Login")}
    <form class="main">
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
      ${loginError ? `<p class="error-message">${loginError}</p>` : ""}
    </section>
    ${footer(
    { tag: "Signup", class: "js-signup-form" },
    { tag: "Login", class: "js-login-submit" }
  )}
  </form>
  `;
}

const LoginForm = {
  toString() {
    return render();
  },
  addListeners() {
    // listenSubmitForm();
  },
  state: {
    loginError: null,
  },
};

export default LoginForm;
