import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/index/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;