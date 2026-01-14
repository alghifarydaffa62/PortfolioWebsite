import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/project'
import Contact from './pages/contact'
import Community from './pages/subpage/Community'
import ETHexplorer from './pages/subpage/ETHexplorer'
import Descrow from './pages/subpage/descrow'
import NFTix from './pages/subpage/NFTix';
import PoP from './pages/subpage/PoP'
import Flux from './pages/subpage/Flux'

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
          <Route path='/Project/ETHexplorer' element={<ETHexplorer/>}/>
          <Route path='/Project/EscrowdApp' element={<Descrow/>}/>
          <Route path='/Project/NFTix' element={<NFTix/>}/>
          <Route path='/Project/PoP' element={<PoP/>}/>
          <Route path='/Project/Flux' element={<Flux/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
