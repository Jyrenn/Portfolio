import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <nav className="navbar">
        <Footer />
      </nav>
    </Router>
  );
}

export default App;
