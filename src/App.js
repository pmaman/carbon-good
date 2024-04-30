import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './Components/Nav';
import About from './Components/About.js';
import Atlas from './Components/Atlas.js';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/atlas' element={<Atlas />} />
      </Routes>
    </>
  );
}

export default App
