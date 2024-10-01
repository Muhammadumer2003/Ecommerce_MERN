
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

function App() {


  return (
    <>
      <h1 className='text-4xl font-bold text-center text-teal-400'>Hello World</h1>

      <Routes>
        <Route path="/auth" element={<Layout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>

       

      </Routes>

      <Routes>
      <Route path="/admin" element={<Layyout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="features" element={<Features/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
