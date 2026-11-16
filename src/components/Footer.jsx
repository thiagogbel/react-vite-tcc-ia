import { Link } from 'react-router-dom'
import { PFC_URL } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong className="logo"><span className="logo-mark">E</span>EduGuru</strong>
          <p className="muted">Aprenda, evolua e descubra seu caminho na tecnologia.</p>
        </div>
        <div className="footer-links">
          <Link to="/como-funciona">Como funciona</Link>
          <Link to="/recursos">Recursos</Link>
          <Link to="/bussola">Bússola</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <a href={PFC_URL} target="_blank" rel="noreferrer">App EduGuru ↗</a>
        </div>
      </div>
      <p className="container copy muted">© 2026 EduGuru — PFC UMC · Feito com React + Vite</p>
    </footer>
  )
}
