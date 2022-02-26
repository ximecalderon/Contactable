import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import Header from "../components/header.js";

export default function renderLayout(page) {
  STORE.setCurrentPage(page.title);

  DOMHandler("#js-header").load(Header);
  const Main = DOMHandler("#js-main");

  Main.load(page)
}
