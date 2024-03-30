import { instance, protectedInstance } from "./instance.js";

// define the authentication service
const userServices = {
  // define the login method
  signin: async (email, password) => {
    // define the data to be sent to the API
    const data = {
      email,
      password,
    };
    // send a POST request to the API
    return instance.post("/user/login", data, { withCredentials: true });
  },
  // define the register method
  signup: async (username, email, password) => {
    // define the data to be sent to the API
    const data = {
      username,
      email,
      password,
    };
    // send a POST request to the API
    return instance.post("/user/register", data);
  },

  // get the currently logged in user
  getUser: async () => {
    return protectedInstance.get("/user/getUser");
  },

  // signout the user
  signout: async () => {
    return protectedInstance.get("/user/logout");
  },
};

// export the service
export default userServices;
