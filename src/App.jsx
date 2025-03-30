import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Models from "./pages/Models";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
