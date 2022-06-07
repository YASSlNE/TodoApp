import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound';
import Home from './components/Home';
import Ziw from './components/Ziw';
function App() {
  return (
    <>
    <div className='bg-blue-400	 min-h-screen'>
    <Router>
    
    <Navbar/>
    <div className="grid gap-20 place-items-center">
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<NotFound />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/ziw' element={<NotFound />} />
            <Route path='/signed' element={<Ziw/>} />
    </Routes>

      
	
    </div>
  </Router>
  </div>
  </>
  );
}

export default App;
