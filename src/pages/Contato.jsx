import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { cursos } from '../data.js'

const vazio = { nome: '', email: '', curso: '', mensagem: '' }

export default function Contato() {
  const [form, setForm] = useState(vazio)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  function alterar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const e = {}
    if (form.nome.trim().length < 3) e.nome = 'Informe seu nome (mínimo 3 letras).'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Informe um e-mail válido.'
    if (!form.curso) e.curso = 'Selecione seu curso.'
    if (form.mensagem.trim().length < 10) e.mensagem = 'Escreva uma mensagem (mínimo 10 caracteres).'
    return e
  }

  function enviar(ev) {
    ev.preventDefault()
    const e = validar()
    setErros(e)
    if (Object.keys(e).length === 0) setEnviado(true) // demonstração: não envia para servidor
  }

  return (
    <>
      <PageHeader
        tag="Fale com a gente"
        titulo="Contato"
        subtitulo="Dúvidas, sugestões ou quer ajudar a testar o EduGuru? Mande uma mensagem."
      />

      <section className="section">
        <div className="container narrow">
          {enviado ? (
            <div className="card success">
              <h2>Mensagem recebida! ✅</h2>
              <p className="muted">Obrigado, {form.nome.split(' ')[0]}. Responderemos em {form.email}.</p>
              <button className="btn btn-ghost" onClick={() => { setForm(vazio); setEnviado(false) }}>Enviar outra</button>
            </div>
          ) : (
            <form className="card form" onSubmit={enviar} noValidate>
              <label>
                Nome
                <input className="input" name="nome" value={form.nome} onChange={alterar} />
                {erros.nome && <small className="error">{erros.nome}</small>}
              </label>
              <label>
                E-mail
                <input className="input" type="email" name="email" value={form.email} onChange={alterar} />
                {erros.email && <small className="error">{erros.email}</small>}
              </label>
              <label>
                Curso
                <select className="input" name="curso" value={form.curso} onChange={alterar}>
                  <option value="">Selecione...</option>
                  {cursos.map((c) => <option key={c.sigla} value={c.sigla}>{c.nome}</option>)}
                </select>
                {erros.curso && <small className="error">{erros.curso}</small>}
              </label>
              <label>
                Mensagem
                <textarea className="input" name="mensagem" rows="5" value={form.mensagem} onChange={alterar} />
                {erros.mensagem && <small className="error">{erros.mensagem}</small>}
              </label>
              <button type="submit" className="btn btn-primary">Enviar mensagem</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
