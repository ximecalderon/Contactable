// import { login, logout } from "./scripts/services/sessions-services.js";

// const credentials = {
//   email: "ximena@mail.com",
//   password: "letmein",
// };

// await login(credentials).then(console.log);

// await logout().then(console.log)

import { createUser } from "./scripts/services/signup-service.js";

const newUser = {
  email: "ximena@test.com",
  password: "letmein"
};

createUser(newUser).then(console.log)