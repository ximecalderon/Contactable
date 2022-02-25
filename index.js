import { login, logout } from "./scripts/services/sessions.js";

const credentials = {
  email: "ximena@mail.com",
  password: "letmein",
};

await login(credentials).then(console.log);

await logout().then(console.log)