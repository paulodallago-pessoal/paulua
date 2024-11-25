import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/index.css";
import Arquivo from "./pages/Arquivo";
import Timeline from "./pages/Timeline";
import Album from "./pages/Album";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/paulua">
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
