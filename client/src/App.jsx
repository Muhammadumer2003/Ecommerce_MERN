
import Layout from './components/auth-view/Layout';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/auth-view/login';
import Register from './pages/auth-view/register';
import './App.css'

import Dashboard from './pages/admin-view/dashboard';
import Features from './pages/admin-view/features';
import Orders from './pages/admin-view/orders';
import Products from './pages/admin-view/products'; 
import Layyout from './components/admin-view/Layyout';
import ShoppingLayout from './components/shopping-view/layout';
import Home from './pages/shopping-view/Home';
import Listing from './pages/shopping-view/Listing';
import Checkout from './pages/shopping-view/Checkout';
import Account from './pages/shopping-view/account';  

import Notfound from './components/not-found/Notfound';
import CheckAuth from './components/common/checkAuth';
import { useSelector } from 'react-redux';

function App() {

  

  const {isauthenticated,user}=useSelector(store=>store.auth);
  console.log("User:", user);
console.log("Is Authenticated:", isauthenticated);



  return (
    <>
      <h1 className='text-4xl font-bold text-center text-teal-400'>Hello World</h1>

      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isauthenticated} user={user} >
         <Layout/>
        </CheckAuth>
          
          }>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isauthenticated} user={user}>
            <Layyout/>
          </CheckAuth>
         }>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="features" element={<Features/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>

        <Route path="/shopping" element={
          <CheckAuth isAuthenticated={isauthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
          }>
          <Route path="home" element={<Home/>}/>
          <Route path="listing" element={<Listing/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="account" element={<Account/>}/>
        </Route>

        <Route path="*" element={<Notfound/>}/>

       
      </Routes>

     
    </>
  )
}

export default App
