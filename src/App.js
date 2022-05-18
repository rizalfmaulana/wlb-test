import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import RoutesPage from "./config/routes/RoutesPage";

function App() {
  return (
    <>
      <Toaster />
      <RoutesPage />
    </>
  );
}

export default App;
