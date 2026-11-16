import { Link } from 'react-router-dom'
import { passos, recursos, cursos, PFC_URL } from '../data.js'
import Cta from '../components/Cta.jsx'

const disciplinasDemo = [
  { nome: 'Programação para Internet', pct: 86 },
  { nome: 'Banco de Dados', pct: 72 },
  { nome: 'Estrutura de Dados', pct: 54 },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="tag">PFC · UMC</span>
            <h1>
              Aprenda, evolua e descubra seu <span className="grad">caminho na tecnologia</span>.
            </h1>
            <p className="lead">
              O EduGuru acompanha a sua evolução nas disciplinas, indica o que revisar e liga o que
              você aprende às áreas e vagas da tecnologia.
            </p>
            <div className="hero-actions">
              <a href={PFC_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Criar conta grátis</a>
              <Link to="/bussola" className="btn btn-ghost">Testar a Bússola</Link>
            </div>
          </div>

          {/* Prévia ilustrativa do painel "Minha evolução" */}
          <div className="card preview" aria-label="Prévia do painel Minha evolução">
            <div className="preview-head">
              <strong>Minha evolução</strong>
              <span className="muted">3º semestre · ADS</span>
            </div>
            {disciplinasDemo.map((d) => (
              <div key={d.nome} className="bar-row">
                <div className="bar-label">
                  <span>{d.nome}</span>
                  <span className={d.pct < 60 ? 'warn' : ''}>{d.pct}%</span>
                </div>
                <div className="bar"><div className={`bar-fill ${d.pct < 60 ? 'low' : ''}`} style={{ width: `${d.pct}%` }} /></div>
              </div>
            ))}
            <div className="guru-tip">🧙 <span>O Guru separou 3 materiais de <b>Estrutura de Dados</b> para você revisar.</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Como funciona</h2>
            <Link to="/como-funciona" className="link">Ver detalhes →</Link>
          </div>
          <div className="grid grid-4">
            {passos.map((p) => (
              <div key={p.n} className="card step">
                <span className="step-n">{p.n}</span>
                <h3>{p.titulo}</h3>
                <p className="muted">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Recursos em destaque</h2>
            <Link to="/recursos" className="link">Todos os recursos →</Link>
          </div>
          <div className="grid grid-3">
            {recursos.slice(0, 3).map((r) => (
              <div key={r.titulo} className="card feature">
                <span className="icon">{r.icone}</span>
                <h3>{r.titulo}</h3>
                <p className="muted">{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Para quem é</h2>
          <div className="grid grid-3">
            {cursos.map((c) => (
              <div key={c.sigla} className="card course">
                <span className="course-sigla">{c.sigla}</span>
                <span>{c.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
