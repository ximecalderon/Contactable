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
  let headerSize;
  let underline;

  if (title == "Contactable") {
    headerSize = "heading-xl";
    underline = ""
  } else {
    headerSize = "heading-lg";
    underline = "border-bottom"
  }

  return `
    <section class="section ${underline} p-10">
      <div class="flex flex-center justify-between">
          <h1 class="${headerSize} margin-center">${title}</h1>
          ${renderLogout()}
      </div>
    </section>
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