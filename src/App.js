import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import About from './Components/About.js';
import Atlas from './Components/Atlas.js';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/atlas' element={<Atlas />} />
      </Routes>
    </>
  );
}

export default App
