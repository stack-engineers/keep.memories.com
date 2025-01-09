import PublicPage from "./pages/Public.Page";
import LoginPage from "./pages/Login.Page";
import SignupPage from "./pages/Signup.Page";
import AdminDashboardPage from "./pages/Admin.Dashboard.Page";
import { Route, Routes } from "react-router-dom";
import adminContext from "./context/adminContext";
import React from "react";
import AboutPage from "./pages/About.Us.Page";
import ContactPage from "./pages/Contact.Us.Page";
import FilterBar from "./pages/Filter.Bar.Page";
import CodeValidationForm from "./components/Email.Verification.Code.Component";
import BlankPage from "./pages/Blank.Verification.Page";
import Categories from "./pages/Categories.Page";
import NewsLetterSubscriptionBlankPage from "./pages/Blank.Newsletter.Verification.Page";

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
      <Route
        path="/login"
        element={admin ? <AdminDashboardPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/signup"
        element={admin ? <AdminDashboardPage /> : <SignupPage />}
      ></Route>
      <Route
        path="/signup/account/verification/code"
        element={admin ? <AdminDashboardPage /> : <CodeValidationForm />}
      ></Route>
      <Route
        path="/signup/account/verification/status"
        element={admin ? <AdminDashboardPage /> : <BlankPage />}
      ></Route>
      <Route
        path="/email/newsletter/subscription/verification"
        element={<NewsLetterSubscriptionBlankPage />}
      ></Route>
      <Route
        path="/admin/dashboard"
        element={admin ? <AdminDashboardPage /> : <LoginPage />}
      ></Route>
      <Route path="/photos/*" element={<Categories />}></Route>
      <Route path="/filter/searches" element={<FilterBar />}></Route>
    </Routes>
  );
}

export default App;
