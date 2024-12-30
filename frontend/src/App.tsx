import PublicPage from "./pages/Public.Page";
import LoginPage from "./pages/Login.Page";
import SignupPage from "./pages/Signup.Page";
import AdminDashboardPage from "./pages/Admin.Dashboard.Page";
import { Route, Routes } from "react-router-dom";
import adminContext from "./context/adminContext";
import React from "react";
import Food from "./pages/categories/Food";
import All from "./pages/categories/All";
import Nature from "./pages/categories/Nature";
import Animals from "./pages/categories/Animals";
import Technology from "./pages/categories/Technology";
import People from "./pages/categories/People";
import Sports from "./pages/categories/Sports";
import AboutPage from "./pages/About.Us.Page";
import ContactPage from "./pages/Contact.Us.Page";
import FilterBar from "./pages/Filter.Bar.Page";
import CodeValidationForm from "./components/Email.Verification.Code.Component";
import BlankPage from "./pages/Blank.Verification.Page";
import Illustrations from "./pages/categories/Illustrations";
import DarkPhotos from "./pages/categories/Dark.Photos";

function App() {
  const context: string | null = React.useContext(adminContext) as
    | string
    | null;
  const admin = JSON.parse(context as string);

  return (
    <Routes>
      <Route index element={<PublicPage />}></Route>
      <Route path="/contact-us" element={<ContactPage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route
        path="/signup/account/verification/code"
        element={admin ? <AdminDashboardPage /> : <CodeValidationForm />}
      ></Route>
      <Route
        path="/signup/account/verification/status"
        element={admin ? <AdminDashboardPage /> : <BlankPage />}
      ></Route>
      <Route
        path="/admin/dashboard"
        element={admin ? <AdminDashboardPage /> : <LoginPage />}
      ></Route>
      <Route path="/photos/categories/all" element={<All />}></Route>
      <Route path="/photos/categories/food" element={<Food />}></Route>
      <Route path="/photos/categories/nature" element={<Nature />}></Route>
      <Route path="/photos/categories/animals" element={<Animals />}></Route>
      <Route
        path="/photos/categories/illustrations"
        element={<Illustrations />}
      ></Route>
      <Route
        path="/photos/categories/dark-photos"
        element={<DarkPhotos />}
      ></Route>
      <Route
        path="/photos/categories/technology"
        element={<Technology />}
      ></Route>
      <Route path="/photos/categories/people" element={<People />}></Route>
      <Route path="/photos/categories/sports" element={<Sports />}></Route>
      <Route path="/filter/searches" element={<FilterBar />}></Route>
    </Routes>
  );
}

export default App;
