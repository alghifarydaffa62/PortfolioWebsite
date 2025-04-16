import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/project'
import Contact from './pages/contact'
import Community from './pages/subpage/Community'
import BrandIn from './pages/subpage/BrandIn'
import Mondsia from './pages/subpage/Mondsia'
import Movie from './pages/subpage/Movie'
import SC from './pages/subpage/SC'
import SDG from './pages/subpage/SDG'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path='/Project/HimitCommunity' element={<Community/>}/>
          <Route path='/Project/BrandIn' element={<BrandIn/>}/>
          <Route path='/Project/Mondsia' element={<Mondsia/>}/>
          <Route path='/Project/Movie' element={<Movie/>}/>
          <Route path='/Project/SC' element={<SC/>}/>
          <Route path='/Project/SDG' element={<SDG/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
