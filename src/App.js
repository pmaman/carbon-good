import { Routes, Route } from "react-router-dom"
import Nav from './Components/Nav'
import About from './Components/About.js'
import Atlas from './Components/Atlas.js'
import Solutions from './Components/Solutions.js'
import Resources from './Components/Resources.js'
import Grid from '@mui/material/Grid'
import './App.css';

function App() {
  return (
    <Grid container>
      <Grid item>
        <Nav />
      </Grid>
      <Grid item>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/atlas' element={<Atlas />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App
