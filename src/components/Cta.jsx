import { PFC_URL } from '../data.js'

export default function Cta({ titulo = 'Pronto para começar?', texto = 'Crie sua conta em menos de um minuto.' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{titulo}</h2>
          <p>{texto}</p>
          <a href={PFC_URL} target="_blank" rel="noreferrer" className="btn btn-light">
            Criar conta grátis
          </a>
        </div>
      </div>
    </section>
  )
}
