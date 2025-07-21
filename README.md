# 📸 Plataforma de Formatura - Sistema para Gestão de Pacotes de Formandos

Bem-vindo à **Plataforma de Formatura**, um sistema completo desenvolvido para automatizar o processo de venda, cadastro, pagamento e assinatura de contratos entre empresas de fotografia e turmas de formandos.  
Esse projeto nasceu para substituir processos manuais (Google Forms, e-mails, planilhas) por uma **experiência moderna, automatizada e organizada** para formandos e administradores.

---

## 🚀 Funcionalidades do MVP

### 👨‍🎓 Área do Formando

- Acesso com código da turma
- Escolha de pacotes personalizados (com álbum, evento, etc.)
- Preenchimento de dados (nome, e-mail, medidas da beca...)
- Escolha da forma de pagamento (Pix, boleto, cartão)
- Pagamento integrado com **Asaas**
- Geração automática de contrato em PDF
- Assinatura digital simples (com botão “Li e concordo”)
- Envio automático de contrato e comprovante

### 👩‍💼 Área do Administrador

- Visualização de todos os formandos por turma
- Status de pagamento e contrato
- Acesso aos contratos assinados
- Painel simples e intuitivo

---

## 🧰 Tecnologias Utilizadas

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Puppeteer](https://pptr.dev/) (para geração de PDFs)
- [Asaas](https://asaas.com/) (integração de pagamentos)
- JWT (autenticação com tokens)

### Frontend

- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)

### DevOps

- [Git](https://git-scm.com/)
- [GitHub Projects](https://github.com/features/project-management)
- [Vercel](https://vercel.com/) (deploy frontend)
- [Render](https://render.com/) ou [Railway](https://railway.app/) (deploy backend)

---

## 🧱 Estrutura do Projeto

formatura-plataforma/  
├── backend/ # API Node.js + MongoDB  
├── frontend/ # Aplicação React com Tailwind  
├── README.md # Este arquivo  
└── .gitignore  

---

## 📦 Como rodar o projeto localmente

### Pré-requisitos

- Node.js e npm instalados
- MongoDB local ou Atlas
- Conta gratuita no [Asaas](https://asaas.com/)

### 1. Clonar o repositório

```bash
git clone https://github.com/lazaro-pontes/formatura-plataforma.git
cd formatura-plataforma
```

### 2. Rodar o backend

```bash
cd backend
npm install
cp .env.example .env # preencha com sua URL do MongoDB e chave do Asaas
npm run dev
```

### 3. Rodar o frontend

```bash
cd ../frontend
npm install
npm run dev
```
