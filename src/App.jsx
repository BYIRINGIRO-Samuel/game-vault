import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Games from './pages/Games/Games'
import Blog from './pages/Blog/Blog'
import Community from './pages/Community/Community'
import Movies from './pages/movies/Movies'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/community' element={<Community />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
