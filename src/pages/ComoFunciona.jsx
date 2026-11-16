import { useState } from 'react'
import { passos, faq } from '../data.js'
import PageHeader from '../components/PageHeader.jsx'
import Cta from '../components/Cta.jsx'

export default function ComoFunciona() {
  const [ativo, setAtivo] = useState(0)
  const [faqAberto, setFaqAberto] = useState(null)
  const passo = passos[ativo]

  return (
    <>
      <PageHeader
        tag="Passo a passo"
        titulo="Como funciona"
        subtitulo="Do cadastro à vaga: quatro passos para transformar o que você estuda em carreira."
      />

      <section className="section">
        <div className="container">
          {/* Linha do tempo clicável */}
          <div className="timeline">
            {passos.map((p, i) => (
              <button
                key={p.n}
                className={`timeline-item ${i === ativo ? 'active' : ''} ${i < ativo ? 'done' : ''}`}
                onClick={() => setAtivo(i)}
              >
                <span className="step-n">{p.n}</span>
                <span>{p.titulo}</span>
              </button>
            ))}
          </div>

          <div className="card step-detail">
            <span className="tag">Passo {passo.n} de {passos.length}</span>
            <h2>{passo.titulo}</h2>
            <p className="lead">{passo.detalhe}</p>
            <div className="step-nav">
              <button className="btn btn-ghost" disabled={ativo === 0} onClick={() => setAtivo(ativo - 1)}>← Anterior</button>
              <button className="btn btn-primary" disabled={ativo === passos.length - 1} onClick={() => setAtivo(ativo + 1)}>Próximo →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Perguntas frequentes</h2>
          {faq.map((f, i) => (
            <div key={f.p} className={`faq ${faqAberto === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setFaqAberto(faqAberto === i ? null : i)} aria-expanded={faqAberto === i}>
                {f.p}<span>{faqAberto === i ? '−' : '+'}</span>
              </button>
              {faqAberto === i && <p className="faq-a muted">{f.r}</p>}
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  )
}
