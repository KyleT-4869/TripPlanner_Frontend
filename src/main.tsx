import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './index.css'
import App from './App.tsx'
import Welcome from './pages/Welcome.tsx'
import NotFound from './pages/NotFound.tsx'
import Plan from './pages/Plan.tsx'
import Map from './pages/Map.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/map" element={<Map/>}/>
        <Route path="*" element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
