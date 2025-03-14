import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
              </Routes>
          </Layout>
      </Router>
  );
}

export default App;
