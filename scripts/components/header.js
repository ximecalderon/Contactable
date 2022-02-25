import { tokenKey } from "../config.js";

export default function header(title) {
  const headerSize = (title == "Contactable" ? "heading-xl" : "heading-lg");

  const renderLogout = () => {
    if (sessionStorage.getItem(tokenKey)) {
      return `<a href="#" class="link js-logout">Logout</a>`
    } else {
      return ""
    }
  };

  return `
  <header class="section border-bottom p-10">
    <div class="flex flex-center justify-between">
        <h1 class="${headerSize} margin-center">${title}</h1>
        ${renderLogout()}
    </div>
  </header>
  `;
}