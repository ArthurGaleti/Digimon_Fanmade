import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index/index';
import { Create, Login } from './pages/users/createLogin';


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create_user' element={<Create/>}/>
        <Route path='/login_user' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;