import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center">
        <h1 className="grad big">404</h1>
        <p className="lead">Essa página não existe. Até o Guru se perdeu aqui. 🧙</p>
        <Link to="/" className="btn btn-primary">Voltar ao início</Link>
      </div>
    </section>
  )
}
