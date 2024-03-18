import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import './global.css'
import NavBar from './components/Nav/NavBar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
