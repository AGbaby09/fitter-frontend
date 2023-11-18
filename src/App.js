import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import LoggedIn from './components/LoggedIn/LoggedIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/*' element={<LoggedIn/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
