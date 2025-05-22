# 🎓 U-Learn – Plataforma de Cursos Online

Este projeto tem como objetivo desenvolver uma plataforma educacional completa, oferecendo um ambiente digital moderno e seguro para a criação, gestão e consumo de cursos online. A aplicação foi elaborada como parte da disciplina **Modelos, Métodos e Técnicas de Engenharia de Software – 2025/1**, incorporando práticas de arquitetura limpa, DevOps, testes automatizados e integração contínua com GitHub Actions.

## 📌 Funcionalidades

- Cadastro e autenticação de alunos e instrutores (com MFA)
- Criação, validação e publicação de cursos com vídeos, módulos e conteúdos escritos
- Sistema de compra de cursos com integração a gateways de pagamento
- Acompanhamento do progresso dos alunos com geração automática de certificados
- Áreas exclusivas para alunos e instrutores, com painéis personalizados
- Sistema de avaliações de cursos
- Canal de suporte técnico e acadêmico

## 🚀 Como Executar o Projeto

Clone este repositório:

```bash
git clone https://github.com/seuusuario/U-Learn-Projeto-A#.git
cd U-Learn-Projeto-A3
```

## 📂 Backend (Node.js)

Para executar o backend:

```bash
cd backend
npm install
npm start
```

## 💻 Frontend (React.js)

Para executar o frontend:

```bash
cd frontend
npm install
npm start
```

## 🧪 Testes Automatizados

Este projeto conta com testes automatizados utilizando Jest e Supertest no backend.

Para executar os testes localmente:

```bash
npm test
```

## 🔁 Integração Contínua (CI/CD)

A aplicação conta com um pipeline de integração contínua configurado via GitHub Actions, responsável por:

- Instalação de dependências
- Execução de testes automatizados
- Build de imagens Docker e envio para o AWS ECR
- Deploy automático no AWS ECS
- Notificações de execução via Slack

## 👥 Equipe de Desenvolvimento

- Gabriel Viegas Capecci
- Gabriel Mariotti Higa
- Gabriela Dardis Rodrigues
- Igor Britto
- Maria Fernanda Mendes Tobias
- Renato Peduto Filho

## 📄 Licença

Este projeto é de uso privado e educacional, desenvolvido exclusivamente para fins acadêmicos e não deve ser utilizado para fins comerciais.
