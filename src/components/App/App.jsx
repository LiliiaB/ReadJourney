import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../Loader/Loader";
import NotFoundPage from "../../Pages/NotFoundPage";

const RegistrationPage = lazy(() => import("../../Pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../Pages/LoginPage"));

export default function App() {
  return (
    <div className="pagecontainer">
      <Suspense fallback={<Loader />}>
        <div className="contentwrap">
          <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/logIn" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}
