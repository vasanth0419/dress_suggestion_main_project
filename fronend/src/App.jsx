import React from "react";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar";
import Forgetpassword from "./components/Forgetpassword";
import Resetpassword from "./components/Resetpassword";

import Register from "./components/Register";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Error from "./components/layouts/Error";
import Trends from "./components/Trends";
import Contactus from "./components/Contactus";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          <Route path="/resetpassword/:token" element={<Resetpassword />} />
          <Route path="/trends" element={<Trends />} />

          <Route path="/contactus" element={<Contactus />} />

          {/* error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
