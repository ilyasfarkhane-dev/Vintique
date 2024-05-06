import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/auth/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import TopCategories from "./components/top-categories/TopCategories";
import Category from "./components/category/Category";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <TopCategories />
        <Category />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
