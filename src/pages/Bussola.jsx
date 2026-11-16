import { useState } from 'react'
import { perguntas, areas, PFC_URL } from '../data.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Bussola() {
  const [indice, setIndice] = useState(0)
  const [respostas, setRespostas] = useState([]) // guarda a área de cada resposta

  const terminou = respostas.length === perguntas.length

  function responder(area) {
    setRespostas([...respostas, area])
    setIndice(indice + 1)
  }

  function reiniciar() {
    setRespostas([])
    setIndice(0)
  }

  // Conta pontos por área e ordena do maior para o menor
  const pontos = Object.keys(areas)
    .map((k) => ({ k, qtd: respostas.filter((r) => r === k).length }))
    .sort((a, b) => b.qtd - a.qtd)

  return (
    <>
      <PageHeader
        tag="Autoavaliação"
        titulo="Bússola EduGuru"
        subtitulo="Responda 4 perguntas rápidas e veja quais áreas da tecnologia combinam com você."
      />

      <section className="section">
        <div className="container narrow">
          {!terminou ? (
            <div className="card quiz">
              <div className="progress">
                <div className="progress-fill" style={{ width: `${(indice / perguntas.length) * 100}%` }} />
              </div>
              <span className="muted">Pergunta {indice + 1} de {perguntas.length}</span>
              <h2>{perguntas[indice].texto}</h2>
              <div className="options">
                {perguntas[indice].opcoes.map((o) => (
                  <button key={o.t} className="option" onClick={() => responder(o.a)}>
                    {o.t}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="card quiz">
              <span className="tag">Seu resultado</span>
              <h2>Sua área principal: <span className="grad">{areas[pontos[0].k].nome}</span></h2>
              <p className="lead">{areas[pontos[0].k].desc}</p>

              {pontos.map((p) => (
                <div key={p.k} className="bar-row">
                  <div className="bar-label">
                    <span>{areas[p.k].nome}</span>
                    <span>{Math.round((p.qtd / perguntas.length) * 100)}%</span>
                  </div>
                  <div className="bar"><div className="bar-fill" style={{ width: `${(p.qtd / perguntas.length) * 100}%` }} /></div>
                </div>
              ))}

              <div className="step-nav">
                <button className="btn btn-ghost" onClick={reiniciar}>Refazer</button>
                <a href={PFC_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Ver vagas no EduGuru</a>
              </div>
            </div>
          )}
          <p className="muted small">
            Esta é uma versão demonstrativa. A Bússola completa, dentro do app, usa mais perguntas e cruza o resultado com o seu desempenho nas disciplinas.
          </p>
        </div>
      </section>
    </>
  )
}
