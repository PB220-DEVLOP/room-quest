import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {About} from './Pages/About.jsx'
import { HelpSection } from "./Pages/HelpSection.jsx";
import { Home } from "./Pages/Home.jsx";
import { Login } from "./Pages/Login.jsx";
import { Register } from "./Pages/Register.jsx";
import { StudentRegistration } from "./Pages/StudentRegistration.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="helpsection" element={<HelpSection />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="studentregistration" element={<StudentRegistration />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
