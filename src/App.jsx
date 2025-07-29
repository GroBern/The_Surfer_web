import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BeachCamp from './pages/BeachCamp'
import TsCamp from './pages/TsCamp'
import WaveCamp from './pages/WaveCamp'
import StyleCamp from './pages/StyleCamp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beach-camp' element={<BeachCamp />} />
        <Route path='/ts2-camp' element={<TsCamp />} />
        <Route path='/wave-camp' element={<WaveCamp />} />
        <Route path='/style-camp' element={<StyleCamp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
