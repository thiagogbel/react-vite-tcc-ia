// Conteúdo do EduGuru centralizado: as páginas só leem daqui.

export const PFC_URL = 'https://tttrisos.github.io/EduGuru/'

export const passos = [
  { n: 1, titulo: 'Crie sua conta', texto: 'Cadastro rápido com nome, curso e e-mail.', detalhe: 'Você escolhe seu curso (SI, ADS ou Engenharia de Software) e o semestre. O EduGuru já monta sua grade com as disciplinas certas.' },
  { n: 2, titulo: 'Pratique e acompanhe', texto: 'Pratique as disciplinas e veja sua evolução em cada uma.', detalhe: 'Quizzes curtos com correção na hora alimentam o painel "Minha evolução", que mostra seu domínio disciplina por disciplina.' },
  { n: 3, titulo: 'Revise e descubra', texto: 'Revise com o Guru e descubra suas áreas com a Bússola.', detalhe: 'Abaixo de 60% em alguma disciplina? O Guru sugere materiais. Em paralelo, a Bússola cruza seus interesses com as áreas da tecnologia.' },
  { n: 4, titulo: 'Direcione sua carreira', texto: 'Veja vagas ligadas ao que você domina e ao que gosta.', detalhe: 'O EduGuru Carreiras mostra vagas reais de tecnologia, remotas ou em SP, conectadas ao seu desempenho e aos seus interesses.' },
]

export const recursos = [
  { icone: '📈', titulo: 'Minha evolução', texto: 'Veja o que você já domina, o que precisa revisar e para onde ir, disciplina por disciplina.', categoria: 'Aprendizado' },
  { icone: '🧙', titulo: 'Guru', texto: 'Abaixo de 60% numa disciplina? O Guru indica materiais para você revisar.', categoria: 'Aprendizado' },
  { icone: '🧭', titulo: 'Bússola EduGuru', texto: 'Autoavaliação de interesses: descubra quais áreas da tecnologia combinam com você.', categoria: 'Carreira' },
  { icone: '💼', titulo: 'EduGuru Carreiras', texto: 'Vagas reais de tecnologia, remotas ou em SP, ligadas ao seu desempenho e aos seus interesses.', categoria: 'Carreira' },
  { icone: '📝', titulo: 'Notas e faltas', texto: 'Sua situação em cada disciplina com a regra de médias e faltas da UMC.', categoria: 'Acadêmico' },
  { icone: '📚', titulo: 'Materiais da comunidade', texto: 'Apostilas e links enviados pelos colegas, com moderação.', categoria: 'Comunidade' },
  { icone: '🏆', titulo: 'Prática com quiz e ranking', texto: 'Rodadas curtas com correção na hora para medir o que você aprendeu.', categoria: 'Aprendizado' },
  { icone: '🔒', titulo: 'Segurança e privacidade', texto: 'Verificação em duas etapas (opcional) e controle total dos seus dados (LGPD).', categoria: 'Acadêmico' },
]

export const cursos = [
  { sigla: 'SI', nome: 'Sistemas de Informação' },
  { sigla: 'ADS', nome: 'Análise e Desenvolvimento de Sistemas' },
  { sigla: 'ES', nome: 'Engenharia de Software' },
]

// Áreas usadas pela Bússola
export const areas = {
  front: { nome: 'Front-End', desc: 'Interfaces web com React, HTML, CSS e JavaScript.' },
  back: { nome: 'Back-End', desc: 'APIs, regras de negócio e servidores (Node.js, Java, Python).' },
  dados: { nome: 'Dados & IA', desc: 'Análise de dados, SQL, machine learning e IA generativa.' },
  infra: { nome: 'Infra & Segurança', desc: 'Cloud, DevOps, redes e segurança da informação.' },
}

export const perguntas = [
  {
    texto: 'O que você mais gosta de fazer num projeto?',
    opcoes: [
      { t: 'Deixar a tela bonita e fácil de usar', a: 'front' },
      { t: 'Fazer a lógica e o banco de dados funcionarem', a: 'back' },
      { t: 'Descobrir padrões nos números', a: 'dados' },
      { t: 'Garantir que tudo fique no ar e protegido', a: 'infra' },
    ],
  },
  {
    texto: 'Qual disciplina você curte mais?',
    opcoes: [
      { t: 'Programação para Internet', a: 'front' },
      { t: 'Estrutura de Dados / POO', a: 'back' },
      { t: 'Estatística / Banco de Dados', a: 'dados' },
      { t: 'Redes / Sistemas Operacionais', a: 'infra' },
    ],
  },
  {
    texto: 'Um bug apareceu. O que você investiga primeiro?',
    opcoes: [
      { t: 'O layout quebrado no celular', a: 'front' },
      { t: 'O endpoint que devolve erro 500', a: 'back' },
      { t: 'A consulta SQL que traz dados errados', a: 'dados' },
      { t: 'O servidor que caiu de madrugada', a: 'infra' },
    ],
  },
  {
    texto: 'Que ferramenta você queria dominar?',
    opcoes: [
      { t: 'React / Figma', a: 'front' },
      { t: 'Node.js / Spring', a: 'back' },
      { t: 'Python / Power BI', a: 'dados' },
      { t: 'Docker / AWS', a: 'infra' },
    ],
  },
]

export const faq = [
  { p: 'O EduGuru é gratuito?', r: 'Sim. É um projeto acadêmico (PFC) feito para os alunos da UMC, sem custo.' },
  { p: 'Quem pode usar?', r: 'Alunos de Sistemas de Informação, ADS e Engenharia de Software da UMC.' },
  { p: 'Meus dados ficam seguros?', r: 'Sim. Seguimos a LGPD, você controla seus dados e pode ativar verificação em duas etapas.' },
  { p: 'As vagas do EduGuru Carreiras são reais?', r: 'Sim, são vagas reais de tecnologia, remotas ou em São Paulo, ligadas ao seu perfil.' },
]

export const tecnologias = ['React', 'Vite', 'React Router', 'JavaScript', 'CSS', 'Vercel', 'GitHub']
