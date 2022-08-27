import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />     
        <div className="container-fluid mt-5">
        <Routes>
          <Route exact path="/" element={<Shop key="Shop" />} />
          <Route exact path="/about" element={<About key="About" />} />
          
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
