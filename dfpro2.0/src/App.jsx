import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/project'
import Contact from './pages/contact'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
