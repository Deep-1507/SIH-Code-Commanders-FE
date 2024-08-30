import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages-ansh/Home.jsx";
import About from "./pages-ansh/About.jsx";
import SignIn from "./pages-ansh/SignIn.jsx";
import SignUp from "./pages-ansh/SignUp.jsx";
import Profile from "./pages-ansh/Profile.jsx";
import Header from "./components-ansh/Header.jsx";
import PrivateRoute from "./components-ansh/PrivateRoute.jsx";
import ShopCreate from "./components-ansh/ShopCreate.jsx";
import ShopLogin from "./components-ansh/ShopLogin.jsx";
import CreateProduct from "./components-ansh/CreateProduct.jsx";
import Output from "./pages-deep/Output.jsx";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/output" element={<Output />} />

        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/shop-create" element={<ShopCreate />} />
        <Route path="/shop-login" element={<ShopLogin />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
