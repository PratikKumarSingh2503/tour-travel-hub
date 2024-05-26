import Navbar from "./components/NavBar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Shop from "./pages/Shop/shop";
import Packages from "./pages/Packages/packages";
import Services from "./pages/Services/services";
import Reviews from "./pages/Reviews/reviews";
import Blog from "./pages/Blog/blog";
import Books from "./pages/Books/books";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>Home</Route>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/products" element={<Shop />}>Shop</Route>
          <Route path="/packages" element={<Packages />}>Packages</Route>
          <Route path="/services" element={<Services />}>Services</Route>
          <Route path="/reviews" element={<Reviews />}>Services</Route>
          <Route path="/blog" element={<Blog />}>Blog</Route>
          <Route path="/book&now" element={<Books />}>Books</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;