import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Arquivo from "./Arquivo";
import Timeline from "./Timeline";
import Album from "./Album";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/album" element={<Album />} />
          <Route path="/arquivo" element={<Arquivo />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
