import { useState } from 'react'
import { recursos } from '../data.js'
import PageHeader from '../components/PageHeader.jsx'
import Cta from '../components/Cta.jsx'

export default function Recursos() {
  const categorias = ['Todos', ...new Set(recursos.map((r) => r.categoria))]
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')

  const lista = recursos.filter((r) => {
    const okCategoria = filtro === 'Todos' || r.categoria === filtro
    const termo = busca.trim().toLowerCase()
    const okBusca = !termo || (r.titulo + ' ' + r.texto).toLowerCase().includes(termo)
    return okCategoria && okBusca
  })

  return (
    <>
      <PageHeader
        tag="Tudo em um lugar"
        titulo="Recursos"
        subtitulo="Ferramentas pensadas para a rotina de quem estuda tecnologia na UMC."
      />

      <section className="section">
        <div className="container">
          <div className="filters">
            <input
              type="search"
              className="input"
              placeholder="Buscar recurso..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <div className="chips">
              {categorias.map((c) => (
                <button key={c} className={`chip ${filtro === c ? 'active' : ''}`} onClick={() => setFiltro(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {lista.length === 0 ? (
            <p className="muted empty">Nenhum recurso encontrado para “{busca}”.</p>
          ) : (
            <div className="grid grid-2">
              {lista.map((r) => (
                <div key={r.titulo} className="card feature">
                  <span className="icon">{r.icone}</span>
                  <div>
                    <span className="badge">{r.categoria}</span>
                    <h3>{r.titulo}</h3>
                    <p className="muted">{r.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Cta />
    </>
  )
}
