import renderLayout from "../components/layout.js";
import { tokenKey } from "../config.js";
import { logout } from "../services/sessions-services.js";
import STORE from "../store.js";
import LoginPage from "../pages/login-page.js";

const renderLogout = () => {
  if (sessionStorage.getItem(tokenKey)) {
    return `<button class="link js-logout">Logout</button>`
  } else {
    return ""
  }
};

function render() {
  const title = STORE.currentPage;
  const headerSize = (title == "Contactable" ? "heading-xl" : "heading-lg");
  return `
    <div class="flex flex-center justify-between">
        <h1 class="${headerSize} margin-center">${title}</h1>
        ${renderLogout()}
    </div>
  `
};

function listenLogout() {
  const button = document.querySelector(".js-logout");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      await logout();
      STORE.user = null;
      renderLayout(LoginPage);
    } catch (error) {
      console.log(error);
    }
  });
};

const Header = {
  toString() {
    return render();
  },
  addListeners() {
    if (sessionStorage.getItem("contactable_token")) listenLogout();
  }
};

export default Header;