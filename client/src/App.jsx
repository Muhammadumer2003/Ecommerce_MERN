
import Layout from './components/auth-view/Layout';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/auth-view/login';
import Register from './pages/auth-view/register';
import './App.css'

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
    </>
  )
}

export default App
