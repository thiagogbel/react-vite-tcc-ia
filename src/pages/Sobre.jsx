import { tecnologias, cursos } from '../data.js'
import PageHeader from '../components/PageHeader.jsx'

const pilares = [
  { titulo: 'O problema', texto: 'Muitos alunos só percebem que estão com dificuldade numa disciplina quando a nota já saiu — e não enxergam como o que estudam se conecta com o mercado.' },
  { titulo: 'A solução', texto: 'Uma plataforma que acompanha a evolução disciplina por disciplina, recomenda revisão no momento certo e liga o desempenho às áreas e vagas de tecnologia.' },
  { titulo: 'O objetivo', texto: 'Reduzir reprovações, aumentar o engajamento e ajudar o aluno a direcionar sua carreira ainda durante a graduação.' },
]

export default function Sobre() {
  return (
    <>
      <PageHeader
        tag="Projeto Final de Curso"
        titulo="Sobre o EduGuru"
        subtitulo="O EduGuru é o PFC desenvolvido na Universidade de Mogi das Cruzes (UMC)."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {pilares.map((p) => (
              <div key={p.titulo} className="card">
                <h3>{p.titulo}</h3>
                <p className="muted">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats">
          <div className="stat"><strong>{cursos.length}</strong><span className="muted">cursos atendidos</span></div>
          <div className="stat"><strong>8</strong><span className="muted">recursos integrados</span></div>
          <div className="stat"><strong>60%</strong><span className="muted">limite que aciona o Guru</span></div>
          <div className="stat"><strong>LGPD</strong><span className="muted">privacidade por padrão</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Este site</h2>
          <p className="muted">
            Esta página inicial foi construída em <b>React + Vite</b> na disciplina de Programação para Internet,
            com apoio de Inteligência Artificial no fluxo ideia → protótipo → código → ajustes → entrega.
            O código é dividido em componentes reutilizáveis (Navbar, Footer, PageHeader, Cta) e os textos
            ficam centralizados em um único arquivo de dados.
          </p>
          <div className="chips">
            {tecnologias.map((t) => <span key={t} className="chip static">{t}</span>)}
          </div>
        </div>
      </section>
    </>
  )
}
