import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { DataBase } from './Components/ArrayOfBlog/ArrayOfBlog';
import AllCategory from "./Components/AllCategory"
import Nav from "./Components/Nav/Nav.js";
import Footer from './Components/Home-Section/Footer/Footer';
import NotFound from "./Components/Home-Section/Not Found/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './Components/Article.js';


function App() {
  return (
    // <DataBase>
    <Router>
      <div className="App">
        <Nav />
        <br />
        <Routes>
          <Route path="/" element={<Navigate to="/Hotels" replace />} />
          <Route path="/#" element={<Navigate to="/Hotels" replace />} />
          <Route path="/home" element={<Navigate to="/Hotels" replace />} />
          <Route path="/:cat" element={<AllCategory />} />
          <Route path="/article/:cat/:Id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    // </DataBase>
  );
}

export default App;