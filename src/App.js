
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/navBar';
import {Routes,Route} from 'react-router-dom';
import Car from './Pages/Car';
import Features from './Pages/Features';
import Help from './Pages/Help'
import Login from './Pages/Login'
import Aboutus from './Pages/Aboutus'
import Home from './Pages/Home';
import SignUp from './Pages/signup';

function App() {
  return (
    <div>
    <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car" element={<Car/>}/>
            <Route path="/feat" element={<Features/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/signup" element={<SignUp/>} />
            
            
        </Routes>
        
    <Footer/>    
        
    </div>

     
  );
}

export default App;
