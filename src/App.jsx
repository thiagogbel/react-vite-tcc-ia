import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ComoFunciona from './pages/ComoFunciona.jsx'
import Recursos from './pages/Recursos.jsx'
import Bussola from './pages/Bussola.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import NotFound from './pages/NotFound.jsx'

// Volta ao topo sempre que a rota muda
function ScrollToTop() {
  const { pathname } = useLocation()
  // Chaves {} para o efeito não retornar nada (React espera só uma função de limpeza)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/bussola" element={<Bussola />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
