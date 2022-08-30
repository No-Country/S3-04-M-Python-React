import './App.css';
import { Routes, Route } from 'react-router-dom';

// importando views de login, registro e home
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import Questions from './page/preguntas';
import {Profile} from './page/perfil'

//importing Routes
import {REGISTER, HOME, QUESTIONS, PROFILE } from './config/routes/path';

import PublicRoute from './components/router/PublicRouter';
import PrivateRoute from './components/router/PrivateRoute';


function App() {
  return (
    <Routes>
      
      <Route path='/' element={<PublicRoute/>}>
        <Route index element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={QUESTIONS} element={<Questions />} />
      </Route>
      {/* Ruta Privada */}
      <Route path={HOME} element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path={PROFILE} element={<Profile/>} />
        {/* <Route Path='/perfil' element={<UserProfile />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
