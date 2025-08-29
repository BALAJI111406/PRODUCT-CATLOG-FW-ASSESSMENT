import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
