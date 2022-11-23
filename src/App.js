import './App.css';
import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="containerhead">
          <h1>Sneakerzz!!</h1>
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/details/:itemid" element={<Details />}></Route>
        </Routes>

        <footer>
          <div className="containernav">
            <NavLink to="/Home" className="iconwrapper">
              Home
            </NavLink>
            <NavLink to="/Men" className="iconwrapper">
              Men
            </NavLink>
            <NavLink to="/Women" className="iconwrapper">
              Women
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
              About
            </NavLink>

          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
