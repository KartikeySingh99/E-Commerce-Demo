import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from "./components/layout/Navbar";
import { getUser } from './Actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from './components/Cart';
import { NotFound } from './components/NotFound';
import Footer from './components/layout/Footer';
import { getCart } from "./Actions/CartAction";
import ProductDetails from './components/products/ProductDetails';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCart);
  }, [dispatch])

  useEffect(() => {
    dispatch(getUser);
  }, [dispatch, isAuthenticated])

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          // newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route exact path='/cart' element={<Cart />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          {/* <Route exact path='/cart' element={<Cart />} /> */}
          <Route exact path='/product/:productID' element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
