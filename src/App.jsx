import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages-ansh/Home';
import About from './pages-ansh/About';
import SignIn from './pages-ansh/SignIn';
import SignUp from './pages-ansh/SignUp';
import Profile from './pages-ansh/Profile';
import Header from './components-ansh/Header';
import PrivateRoute from './components-ansh/PrivateRoute';
import ShopCreate from './components-ansh/ShopCreate';
import ShopLogin from './components-ansh/ShopLogin';
import CreateProduct from './components-ansh/CreateProduct';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
          <Route path='/shop-create' element={<ShopCreate />} />
          <Route path='/shop-login' element={<ShopLogin />} />
        <Route path='/' element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-product' element={<CreateProduct />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}
