import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Produtos from "./pages/produtos";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" Component={Home} />
       <Route path="/produtos" Component={Produtos} />
      </Routes>
    </Router>
  );
}

export default App;
