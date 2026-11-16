# EduGuru — Página inicial (React + Vite)

Página inicial do PFC **EduGuru** (UMC), feita em React + Vite com apoio de IA
na disciplina de Programação para Internet.

App original do PFC: https://tttrisos.github.io/EduGuru/

## Páginas

| Rota | Página | O que tem de interativo |
|---|---|---|
| `/` | Início | Hero, prévia do painel "Minha evolução", destaques |
| `/como-funciona` | Como funciona | Linha do tempo clicável (useState) e FAQ em acordeão |
| `/recursos` | Recursos | Busca por texto e filtro por categoria |
| `/bussola` | Bússola | Quiz de 4 perguntas que calcula sua área na tecnologia |
| `/sobre` | Sobre | Problema, solução, objetivo e tecnologias do projeto |
| `/contato` | Contato | Formulário com validação |
| `*` | 404 | Página não encontrada |

## Estrutura

```
src/
  components/   Navbar, Footer, PageHeader, Cta (reutilizáveis)
  pages/        Uma página por rota
  data.js       Todos os textos e dados num só lugar
  App.jsx       Rotas (React Router)
  index.css     Estilos (tema escuro do EduGuru)
```

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy

- **GitHub:** suba o repositório.
- **Vercel:** importe o repositório em vercel.com → framework "Vite" é detectado sozinho.
  O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, para que
  recarregar `/recursos` (por exemplo) não dê erro 404.

## Uso de IA

O código foi gerado com IA (Claude) a partir do conteúdo do app original e depois
revisado: componentes separados, dados centralizados em `data.js`, layout
responsivo com menu mobile e rotas compatíveis com a Vercel.
