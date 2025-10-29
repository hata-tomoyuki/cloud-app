import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zukan from './pages/Zukan'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zukan" element={<Zukan />} />
    </Routes>
  )
}

export default App
