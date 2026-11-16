// Cabeçalho reutilizado no topo de cada página interna
export default function PageHeader({ tag, titulo, subtitulo }) {
  return (
    <section className="page-header">
      <div className="container">
        {tag && <span className="tag">{tag}</span>}
        <h1>{titulo}</h1>
        {subtitulo && <p className="lead">{subtitulo}</p>}
      </div>
    </section>
  )
}
