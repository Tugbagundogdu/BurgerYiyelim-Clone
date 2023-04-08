import './App.css';
import About from './components/AboutUs';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutUs' element={<About/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
