import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";

import NotFoundPage from "../../Pages/NotFoundPage";

const HomePage = lazy(() => import("../../Pages/HomePage"));
const FavouritePage = lazy(() => import("../../Pages/FavouritePage"));
const TeachersPage = lazy(() => import("../../Pages/TeachersPage"));

export default function App() {
  return (
    <div className="pagecontainer">
      <Suspense fallback={<Loader />}>
        <NavBar />
        <div className="contentwrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}
