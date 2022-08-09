import './App.css';
import { Routes, Route } from 'react-router-dom';

// importando views de login, registro e home
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='registro' element={<Register />} />
    </Routes>
  );
}

export default App;
