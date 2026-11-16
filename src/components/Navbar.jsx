import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PFC_URL } from '../data.js'

const links = [
  { to: '/', label: 'Início' },
  { to: '/como-funciona', label: 'Como funciona' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/bussola', label: 'Bússola' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={() => setAberto(false)}>
          <span className="logo-mark">E</span>EduGuru
        </Link>

        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${aberto ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a href={PFC_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Acessar app
          </a>
        </nav>
      </div>
    </header>
  )
}
